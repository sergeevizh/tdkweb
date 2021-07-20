import { Component, OnInit } from '@angular/core';
import { BlocksGQL, ContentEdge, HomepageGQL, InfosGQL, PlaysGQL, TeamGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homepage?: ContentEdge;
  premieres?: ContentEdge[];
  renewals?: ContentEdge[];
  actors?: ContentEdge[];
  infos?: ContentEdge[];
  blocks?: ContentEdge[];

  constructor(private homepageQuery: HomepageGQL, private actorQuery: TeamGQL, private playsQuery: PlaysGQL, private infoQuery: InfosGQL, private blockQuery: BlocksGQL) { }

  ngOnInit(): void {
    this.homepageQuery.watch().valueChanges.subscribe(result => {
      this.homepage = (result.data?.contents?.edges as ContentEdge[])[0];
    });

    this.playsQuery.watch().valueChanges.subscribe(result => {
      let plays = result.data.contents?.edges
        ?.filter(p => Object.keys(p?.node?.taxonomyValues).includes("play_categories"))
        .filter(p => Object.keys(p?.node?.taxonomyValues.play_categories).includes("current-season"));
      
      this.premieres = plays
        ?.filter(p => Object.keys(p?.node?.taxonomyValues.play_categories).includes("premiere")) as ContentEdge[];
      
      this.renewals = plays
        ?.filter(p => Object.keys(p?.node?.taxonomyValues.play_categories).includes("renewal")) as ContentEdge[];
    })

    this.blockQuery.watch().valueChanges.subscribe(result => {
      this.blocks = result.data.contents?.edges
        ?.filter(b => Object.keys(b?.node?.taxonomyValues).includes("entry_categories"))
        .filter(b => Object.keys(b?.node?.taxonomyValues.entry_categories).includes("homepage")) as ContentEdge[];
    });

    this.actorQuery.watch().valueChanges.subscribe(result => {
      this.actors = result.data.contents?.edges
        ?.filter(a => Object.keys(a?.node?.taxonomyValues).includes("departments"))
        .filter(a => Object.keys(a?.node?.taxonomyValues.departments).includes("actors")) as ContentEdge[];
    })
  }

}
