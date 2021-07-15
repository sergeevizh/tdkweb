import { Component, OnInit } from '@angular/core';
import { ContentEdge, PlaysGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.scss']
})
export class PlaysComponent implements OnInit {

  seasonalPlays?: ContentEdge[];
  archivedPlays?: ContentEdge[];
  showArchive: boolean = false;

  constructor(private playQuery: PlaysGQL) { }

  ngOnInit(): void {
    this.playQuery.watch().valueChanges.subscribe(result => {
      this.seasonalPlays = result.data.contents?.edges
        ?.filter(p => Object.keys(p?.node?.taxonomyValues).includes("play_categories"))
        .filter(p => Object.keys(p?.node?.taxonomyValues.play_categories).includes("current-season")) as ContentEdge[];
      
      this.archivedPlays = result.data.contents?.edges
        ?.filter(p => Object.keys(p?.node?.taxonomyValues).includes("play_categories"))
        .filter(p => Object.keys(p?.node?.taxonomyValues.play_categories).includes("archived")) as ContentEdge[];
    });
  }

  toggleArchive(){
    this.showArchive = !this.showArchive;
  }

}
