import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { DateFormatterParams } from 'angular-calendar';

@Injectable({
  providedIn: 'root'
})
export class CustomDateFormatterService {

  constructor() { }

  public dayViewHour({date, locale}: DateFormatterParams): string {
    return formatDate(date, 'HH:mm', locale as string);
  }

  public weekViewHour({date, locale}: DateFormatterParams): string {
    return this.dayViewHour({date, locale});
  }
}
