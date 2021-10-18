import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  name: string = ""
  subj: string = ""
  msg: string = ""
  url: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  makeUrlString(): string{
    this.url = 'mailto:office@theater-des-kindes.at?subject='+this.stringToUrl(this.subj!);
    this.url += '&body=Name:%20' + this.stringToUrl(this.name!);
    this.url += '%0D%0A' + this.stringToUrl(this.msg!);
    return this.url;
  }

  stringToUrl(str: string): string{
    return str.replace(" ", "%20").replace("\n", "%0D%0A")
  }

}
