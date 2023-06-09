import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
})
export class OrdinalPipe implements PipeTransform {
  transform(num: number) {
    let rem = num % 10;

    if (rem === 1) {
      return num + 'st';
    } else if (rem === 2) {
      return num + 'nd';
    } else if (rem === 3) {
      return num + 'rd';
    } else {
      return num + 'th';
    }
  }
}
