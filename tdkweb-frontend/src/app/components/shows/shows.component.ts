import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView, CalendarDateFormatter, DAYS_OF_WEEK } from 'angular-calendar';
import { CustomDateFormatterService } from 'src/app/services/custom-date-formatter.service';
import { ContentEdge } from 'src/generated/graphql';

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

  locale: string = 'de-AT';
  showsView = "calendar";
  view: CalendarView = CalendarView.Month;
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  shows: CalendarEvent[] = [];
  viewDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  getPreviousMonth(): Date{
    return this.getShiftedDate(this.viewDate, -1);
  }

  getNextMonth(): Date{
    return this.getShiftedDate(this.viewDate, 1);
  }

  getShiftedDate(date: Date, shift: number): Date{
    console.log(date, shift, new Date(date.getFullYear(), date.getMonth()+shift));
    return new Date(date.getFullYear(), date.getMonth()+shift, date.getDay());
  }

}
