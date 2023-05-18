import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  inputs: ['Child1a', 'f1']
})
export class Child1Component {
Child1a: any;
f1:any;

}
