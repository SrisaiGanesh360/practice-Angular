import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
})
export class RemainingPipe implements PipeTransform {
  transform(msg: string, maxChar: number) { // maxChar is the argument that takes remaining : 100 value and that 100 can be changed based on requirement
    return maxChar - msg.length;
  }
}
