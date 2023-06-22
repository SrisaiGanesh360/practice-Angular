import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // remove this provdeIn: 'root' if you want to make this available only to a specific module. In app.module.ts mention that service in Providers: [];
})
export class MathService {
  PI = 3.141;

  add(a: any, b: any) {
    return a + b;
  }
  sub(a: any, b: any) {
    return a - b;
  }

  constructor() {}
}
