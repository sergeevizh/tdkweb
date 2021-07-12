import { Component, OnInit } from '@angular/core';
import { ContentEdge, NotFoundErrorGQL } from 'src/generated/graphql';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  error?: ContentEdge;

  constructor(private query: NotFoundErrorGQL) { }

  ngOnInit(): void {
    this.query.watch().valueChanges.subscribe(result => {
      let errors = result.data.contents?.edges as ContentEdge[];
      this.error = errors[Math.floor(Math.random() * errors.length)];
    })
  }

}
