import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { TeamGQL, ContentEdge, BlocksGQL } from 'src/generated/graphql';

const groupBy = <T, K extends keyof any>(list: T[], getKey: (item: T) => K) =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group]) previous[group] = [];
    previous[group].push(currentItem);
    return previous;
  }, {} as Record<K, T[]>);

type Department = {
  key: string,
  name: string,
  people?: ContentEdge[]
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  departmentPeople?: Record<string, ContentEdge[]>;
  departments?: Department[];
  people?: ContentEdge[];
  actors?: ContentEdge[];
  bts?: ContentEdge[];
  technitians?: ContentEdge[];
  teamBlock?: ContentEdge;

  constructor(private apollo: Apollo, private teamQuery: TeamGQL, private blocksQuery: BlocksGQL) { }

  ngOnInit(): void {
      this.blocksQuery.watch().valueChanges.subscribe((result) => {
        this.teamBlock = result.data.contents?.edges?.find(b => b?.node?.fieldValues.slug == "team-einleitung") as ContentEdge;
      });
      this.teamQuery.watch().valueChanges.subscribe((result) => {
        this.people = result?.data?.contents?.edges as ContentEdge[];
        this.people = this.people.filter(p => Object.keys(p.node?.taxonomyValues).length > 0).sort((p1, p2) => {
          return p1.node?.fieldValues.index - p2.node?.fieldValues.index
        });

        this.departmentPeople = groupBy(this.people, i => Object.keys(i.node?.taxonomyValues.departments)[0]);
        this.departments = Object.keys(this.departmentPeople).map(i => {
          return {
            key: i,
            name: (this?.departmentPeople?.[i][0].node?.taxonomyValues.departments?.[i]) as string,
            people: this?.departmentPeople?.[i]
          };
        }).sort((a, b) => {
          var textA = a.key.toUpperCase();
          var textB = b.key.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
      });
  }
}
