import { Component, Input, OnInit } from '@angular/core';
import { ContentEdge } from 'src/generated/graphql';

@Component({
  selector: 'app-person-teaser',
  templateUrl: './person-teaser.component.html',
  styleUrls: ['./person-teaser.component.scss']
})
export class PersonTeaserComponent implements OnInit {

  @Input("person") person?: ContentEdge;

  constructor() { }

  ngOnInit(): void {
  }

}
