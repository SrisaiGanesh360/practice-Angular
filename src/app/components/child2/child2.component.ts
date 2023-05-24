import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  outputs: ['nameEvent']
})
export class Child2Component {
  @Input() b: any;
  name: string = 'Srisai Ganesh';

  nameEvent = new EventEmitter(); // is a class from core components
  sendDataToParent() {
    this.nameEvent.emit(this.name);
  }
}
