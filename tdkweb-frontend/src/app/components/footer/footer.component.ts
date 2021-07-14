import { Component, OnInit } from '@angular/core';
import { BlocksGQL, ContactDetailsGQL, Content, ContentEdge, InfosGQL, Node } from 'src/generated/graphql';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  contactDetails?: ContentEdge[]
  officeTimes?: ContentEdge;
  copyrightNotice?: string;
  year: Date = new Date()

  constructor(private contactDetailsQuery: ContactDetailsGQL, private blocksQuery: BlocksGQL, private infoQuery: InfosGQL) { }

  ngOnInit(): void {
    this.contactDetailsQuery.watch().valueChanges.subscribe(result => {
      this.contactDetails = result.data.contents?.edges
        ?.filter(d => Object.keys(d?.node?.taxonomyValues).includes("contact_categories"))
        .filter(d => Object.keys(d?.node?.taxonomyValues.contact_categories).includes("footer")) as ContentEdge[];
      console.log(this.contactDetails);
    })

    this.blocksQuery.watch().valueChanges.subscribe(result => {
      this.copyrightNotice = result.data.contents?.edges?.find(d => d?.node?.fieldValues.slug == 'copyright-notiz')?.node?.fieldValues.content;
    })

    this.infoQuery.watch().valueChanges.subscribe(result => {
      this.officeTimes = result.data.contents?.edges?.find(i => i?.node?.fieldValues.slug == 'burozeiten') as ContentEdge;
    })

  }

}
