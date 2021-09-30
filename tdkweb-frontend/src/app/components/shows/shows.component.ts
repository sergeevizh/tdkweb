import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarEvent, CalendarView, CalendarDateFormatter, DAYS_OF_WEEK } from 'angular-calendar';
import { addHours, addMonths, format, isSameDay, isSameMonth, parseISO, subMonths } from 'date-fns';
import { de } from 'date-fns/locale';
import { Subject } from 'rxjs';
import { ShowEvent } from 'src/app/interfaces/show-event';
import { CustomDateFormatterService } from 'src/app/services/custom-date-formatter.service';
import { Content, ContentEdge, PlayGQL, RelationEdge, ShowGQL, ShowPlayRelationsGQL, ShowsGQL } from 'src/generated/graphql';
import { TicketDialogComponent } from '../ticket-dialog/ticket-dialog.component';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
  /* providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatterService
    }
  ] */
})
export class ShowsComponent implements OnInit {

  @ViewChild('dialog') dialogComponent?: TicketDialogComponent;

  locale: string = 'de-AT';
  showsView = "calendar";
  view: CalendarView = CalendarView.Month;
  viewString = "month";
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  events: CalendarEvent[] = [];
  viewDate: Date = new Date();
  nextMonth?: Date;
  prevMonth?: Date;
  isCurrentMonth: boolean = true;
  today: Date = new Date();
  showEvents: ShowEvent[] = [];
  activeDayIsOpen: boolean = false;
  refresh: Subject<any> = new Subject();

  constructor(private showsQuery: ShowsGQL, private playQuery: PlayGQL, private relationsQuery: ShowPlayRelationsGQL) { }

  ngOnInit(): void {
    this.setViewDate(this.viewDate);

    this.showsQuery.watch().valueChanges.subscribe(result => {
      result.data.contents?.edges?.forEach(e => {
        /*console.log('show', e);*/
        this.relationsQuery.watch({id: e?.node?.id}).valueChanges.subscribe(relations => {
          /*console.log('rel',relations);*/
          this.playQuery.watch({id: (relations.data.relations?.edges as RelationEdge[])[0].node?.toContent.id as string}).valueChanges.subscribe(play => {
            /*console.log('play', play);*/
            this.showEvents.push({
              show: e?.node as Content,
              play: play.data.content as Content
            });
            let eventDate: Date = parseISO(e?.node?.fieldValues.date);
            this.events.push({
              start: eventDate,
              end: addHours(eventDate, 1),
              title: format(eventDate, 'HH:mm') + ' ' + play.data.content?.fieldValues.title
            });
            this.refresh.next();
          })
        })
      })
    });
  }

  setViewDate(event: Date){
    this.viewDate = event;
    this.nextMonth = addMonths(this.viewDate, 1);
    this.prevMonth = subMonths(this.viewDate, 1);

    this.isCurrentMonth = this.viewDate.getMonth() == new Date().getMonth() && this.viewDate.getFullYear() == new Date().getFullYear();
  }

  resetViewDate(){
    this.setViewDate(new Date());
  }

  changeView(view: string){
    this.viewString = view;

  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  showIsInMonth(show: ShowEvent): boolean{
    return parseISO(show.show?.fieldValues.date).getMonth() == this.viewDate.getMonth();
  }

  getFormattedDate(date: any){
    return format(parseISO(date), "eeee, dd.MM.yyyy HH:mm", {locale: de});
  }

  getTaxonomies(show: ShowEvent): string[]{
    if(!Object.keys(show.show?.taxonomyValues).includes('show_categories')){return [];}
    return Object.values(show.show?.taxonomyValues.show_categories);
  }

  isShowPast(show: ShowEvent): boolean{
    return parseISO(show.show?.fieldValues.date) < this.today;
  }

}
