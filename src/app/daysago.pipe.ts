import { Pipe, PipeTransform } from '@angular/core';

import { formatDistanceStrict } from 'date-fns';

@Pipe({ name: 'daysago' })
export class DaysagoPipe implements PipeTransform {
  transform(date: number): any {
    return formatDistanceStrict(date, new Date(), { addSuffix: true });
  }
}
