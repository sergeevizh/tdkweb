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
  @Input("show-chips") showChips: boolean = true;

  playId?: string;

  ngOnInit(): void {
    let splitUrl = this.play!.node!.id.split('/');
    this.playId = splitUrl[splitUrl!.length-1];
  }

  isPremiere(): boolean{
    return Object.keys(this.play?.node?.taxonomyValues.play_categories).includes("premiere");
  }

  isRenewal(): boolean{
    return Object.keys(this.play?.node?.taxonomyValues.play_categories).includes("renewal");
  }

}
