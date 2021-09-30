import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { format, parseISO } from 'date-fns';
import { de } from 'date-fns/locale';
import { ShowEvent } from 'src/app/interfaces/show-event';

@Component({
  selector: 'app-ticket-dialog',
  templateUrl: './ticket-dialog.component.html',
  styleUrls: ['./ticket-dialog.component.scss']
})
export class TicketDialogComponent implements OnInit {

  isOpen = false;
  show?: ShowEvent;
  name = '';
  tel = '';
  tickets = 1;
  note = '';
  info = '';
  dialogType = 'form';

  constructor() { }

  ngOnInit(): void {
  }

  open(show: ShowEvent){
    this.show = show;
    this.info = this.getNote();

    if(this.show.show?.fieldValues.link && (this.show.show.fieldValues.link as string).length > 0){
      this.dialogType = 'forward';
    }
    else if(Object.keys(this.show.show?.taxonomyValues).includes('show_categories') && Object.keys(this.show.show?.taxonomyValues.show_categories).includes('guest-show')){
      this.dialogType = 'guest-show';
    }
    else{
      this.dialogType = 'form';
    }

    this.isOpen = true;
  }

  close(event: any){
    event.stopPropagation();
    this.isOpen = false;
    this.show = undefined;
  }

  dontClose(event: any){
    event.stopPropagation();
  }

  formatDate(date: any){
    return format(parseISO(date), "dd.MM.yyyy HH:mm", {locale: de});
  }

  makeUrlString(): string{
    let url = 'mailto:office@theater-des-kindes.at?subject=Ticketreservierung%20für%20';
    url += this.show?.play?.fieldValues.title + '%20am%20' + this.formatDate(this.show?.show?.fieldValues.date);
    url += '&body=Name:%20' + this.name + '%0D%0ATel.:%20' + this.tel + '%0D%0AAnzahl%20Tickets:%20' + this.tickets;
    url += '%0D%0ANotiz:%20' + this.note;
    return url;
  }

  getNote(): string{
    let note = '';
    if(Object.keys(this.show?.show?.taxonomyValues).includes('show_notes')){
      note = Object.values(this.show?.show?.taxonomyValues.show_notes)[0] as string;
    }
    console.log(note);
    return note;
  }

}
