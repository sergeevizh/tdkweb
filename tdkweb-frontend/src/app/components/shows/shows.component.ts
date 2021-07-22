import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView, CalendarDateFormatter, DAYS_OF_WEEK } from 'angular-calendar';
import { addMonths, subMonths } from 'date-fns';
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
  viewString = "month";
  weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
  shows: CalendarEvent[] = [];
  viewDate: Date = new Date();
  nextMonth?: Date;
  prevMonth?: Date;
  isCurrentMonth: boolean = true;
  today: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.setViewDate(this.viewDate);
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

}
