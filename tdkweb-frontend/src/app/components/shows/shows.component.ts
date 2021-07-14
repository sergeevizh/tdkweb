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

}
