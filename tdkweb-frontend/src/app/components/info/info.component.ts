import { Component, OnInit } from '@angular/core';
import { ContentEdge, InfosGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  infos?: {
    edge: ContentEdge,
    expanded: boolean
  }[];

  constructor(private infoQuery: InfosGQL) { }

  ngOnInit(): void {
    this.infoQuery.watch().valueChanges.subscribe(result => {
      let infoEdges = result.data.contents?.edges
        ?.filter(i => Object.keys(i?.node?.taxonomyValues).includes("entry_categories"))
        .filter(i => Object.keys(i?.node?.taxonomyValues.entry_categories).includes("infopage")) as ContentEdge[];
      this.infos = infoEdges.map(i => {
        return {
          edge: i,
          expanded: false
        };
      })
    });
  }

}
