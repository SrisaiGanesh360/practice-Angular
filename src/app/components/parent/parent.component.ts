import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  a: number = 10;
  b: number = 20;
  pName: any;
  arr:any = [10,20,30,40];

  f1() {
    alert('I am f1 from parent...');
  }

  recieveName(name: string) {
    this.pName = name;
  }
}
