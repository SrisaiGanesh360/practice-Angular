import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameprefix',
})
export class NameprefixPipe implements PipeTransform {
  transform(value: string, args: string ) {  // value is name and args is gender  
    if (args === 'male'){
      return 'Mr.' + value;
    }
    else {
      return 'Miss.' + value;
    } 
  }
}
