import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ContentEdge, PlayGQL } from 'src/generated/graphql';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-play-detail',
  templateUrl: './play-detail.component.html',
  styleUrls: ['./play-detail.component.scss']
})
export class PlayDetailComponent implements OnInit {

  play?: ContentEdge;

  constructor(private playQuery: PlayGQL, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    /* this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.playQuery.watch({id: params.get('id')!}).valueChanges.subscribe(result => {this.play = result.data.content})
      )
    ); */
  }

}
