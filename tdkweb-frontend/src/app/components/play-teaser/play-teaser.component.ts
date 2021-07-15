import { Component, Input, OnInit } from '@angular/core';
import { ContentEdge } from 'src/generated/graphql';

@Component({
  selector: 'app-play-teaser',
  templateUrl: './play-teaser.component.html',
  styleUrls: ['./play-teaser.component.scss']
})
export class PlayTeaserComponent implements OnInit {

  constructor() { }

  @Input("play") play?: ContentEdge;

  ngOnInit(): void {
  }

  isPremiere(): boolean{
    return Object.keys(this.play?.node?.taxonomyValues.play_categories).includes("premiere");
  }

  isRenewal(): boolean{
    return Object.keys(this.play?.node?.taxonomyValues.play_categories).includes("renewal");
  }

}
