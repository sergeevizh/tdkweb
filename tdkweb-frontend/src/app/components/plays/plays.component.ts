import { Component, OnInit } from '@angular/core';
import { compareAsc, parseISO } from 'date-fns';
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
      let plays = result.data.contents?.edges;
      /* let plays = result.data.contents?.edges?.sort((a, b) => {
        return compareAsc(parseISO(a?.node?.fieldValues.premiere_date), parseISO(b?.node?.fieldValues.premiere_date));
      }) */

      this.seasonalPlays = plays
        ?.filter(p => Object.keys(p?.node?.taxonomyValues).includes("play_categories"))
        .filter(p => Object.keys(p?.node?.taxonomyValues.play_categories).includes("current-season")) as ContentEdge[];
      
      this.archivedPlays = plays
        ?.filter(p => Object.keys(p?.node?.taxonomyValues).includes("play_categories"))
        .filter(p => Object.keys(p?.node?.taxonomyValues.play_categories).includes("archived")) as ContentEdge[];
    });
  }

  toggleArchive(){
    this.showArchive = !this.showArchive;
  }

}
