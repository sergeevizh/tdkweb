import { Component, OnInit } from '@angular/core';
import { ContentEdge, PlaysGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent implements OnInit {

  constructor(private playsQuery: PlaysGQL) { }
  
  plays?: ContentEdge[];
  playFilter: string = "";

  ngOnInit(): void {
    this.playsQuery.watch().valueChanges.subscribe(result => {
      this.plays = result.data.contents?.edges?.filter(p => Object.keys(p?.node?.fieldValues).includes("images")) as ContentEdge[];
    })
  }

  filterPlay(play: ContentEdge): boolean{
    return (play.node?.fieldValues.title as string).toLowerCase().includes(this.playFilter.toLowerCase());
  }

}
