import { Component, OnInit } from '@angular/core';
import { ContactDetailsGQL, ContentEdge } from 'src/generated/graphql';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private contactQuery: ContactDetailsGQL) { }

  contactDetails?: ContentEdge[];

  ngOnInit(): void {
    this.contactQuery.watch().valueChanges.subscribe(result => {
      this.contactDetails = result.data.contents?.edges
        ?.filter(c => Object.keys(c?.node?.taxonomyValues).includes("contact_categories"))
        .filter(c => Object.keys(c?.node?.taxonomyValues.contact_categories).includes("contact-page")) as ContentEdge[];
    })
  }

}
