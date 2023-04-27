import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css'],
})
export class DatabindingComponent {
  name = 'SrisaiGanesh';
  img_url =
    'https://rukminim1.flixcart.com/image/200/200/j5bceq80/diya/s/t/g/etl2042-etrendz-original-imaecayyx9nedubp.jpeg?q=70';
  flag: boolean = false;
  f1() {
    alert("I'm f1 function");
  }
  a: number = 20;
  b: number = 10;
  t: string = '';
  maxChar: number = 1000;

  Result: string = '';
  addition(num1: number, num2: number) {
    this.Result = `Addtion of ${num1} and ${num2} is ${num1 + num2}`;
  }
  subtraction(num1: number, num2: number) {
    this.Result = `Subtraction of ${num1}  and ${num2} is ${num1 - num2}`;
  }
  mutiplication(num1: number, num2: number) {
    this.Result = `Mutiplication of ${num1}  and ${num2} is ${num1 * num2}`;
  }
  division(num1: number, num2: number) {
    this.Result = `Division of ${num1}  and ${num2} is ${num1 / num2}`;
  }
}
