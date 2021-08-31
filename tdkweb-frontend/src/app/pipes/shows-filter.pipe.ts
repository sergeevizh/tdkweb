import { Pipe, PipeTransform } from '@angular/core';
import parseISO from 'date-fns/parseISO';
import { ShowEvent } from '../interfaces/show-event';

@Pipe({
  name: 'showsFilter'
})
export class ShowsFilterPipe implements PipeTransform {

  transform(items: any[], currMonth: Date): any {
    if(!items || !currMonth){ return items; }
    console.log(currMonth);
    console.log(items);
    return items.filter(s => parseISO(s.show?.fieldValues.date).getMonth() == currMonth.getMonth());
  }

}
