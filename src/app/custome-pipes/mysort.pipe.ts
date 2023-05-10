import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mysort',
  pure: false, //making it impure makes angular to consider newly added value in text box as new data and mysort transform is applie
})
export class MysortPipe implements PipeTransform {

  transform(arr: any[]) {
    console.log('mysort pipe called...')
    return arr.sort((a, b) => a - b);
  }
}
