import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Content, ContentEdge, PlayGQL } from 'src/generated/graphql';
import { switchMap } from 'rxjs/operators';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-play-detail',
  templateUrl: './play-detail.component.html',
  styleUrls: ['./play-detail.component.scss']
})
export class PlayDetailComponent implements OnInit {

  play?: Content;
  playId?: number;
  trailer?: SafeHtml;

  constructor(private playQuery: PlayGQL, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    /* this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.playQuery.watch({id: params.get('id')!}).valueChanges.subscribe(result => {this.play = result.data.content})
      )
    ); */

    this.route.params.subscribe(params => {
      this.playId = params['id'];
    });

    this.playQuery.watch({id: '/api/contents/'+this.playId}).valueChanges.subscribe(result => {
      this.play = result.data.content as Content;
      this.trailer = this.sanitizer.bypassSecurityTrustHtml(this.play.fieldValues.trailer.responsive);  
    })

  }

}
