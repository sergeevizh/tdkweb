import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { TeamGQL, ContentEdge } from 'src/generated/graphql';

const groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group]) previous[group] = [];
    previous[group].push(currentItem);
    return previous;
  }, {} as Record<K, T[]>);

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  departments?: Record<any, ContentEdge[]>;
  people?: ContentEdge[];
  actors?: ContentEdge[];
  bts?: ContentEdge[];
  technitians?: ContentEdge[];

  constructor(private apollo: Apollo, private teamQuery: TeamGQL) { }

  ngOnInit(): void {
      this.teamQuery.watch().valueChanges.subscribe((result) => {
        console.log(result);
        this.people = result.data.contents.edges as ContentEdge[];
        this.actors = this.people.filter(p => p.node?.taxonomyValues.actors == "Schauspiel");
        this.bts = this.people.filter(p => p.node?.taxonomyValues.backstage == "Backstage");
        this.technitians = this.people.filter(p => p.node?.taxonomyValues.lighting != null);
        this.departments = groupBy((result.data.contents?.edges as ContentEdge[]), i => i.node?.taxonomyValues.departments);
      });
      console.log(this.people);
  }
}
