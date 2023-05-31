import { Component, Input, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  outputs: ['nameEvent']
})
export class Child2Component {
  @Input() b: any;
  name: string = 'Srisai Ganesh';

  @ViewChild('nameBox') nameBox:any; // is equivalent to document.getElementById('abc')

  nameEvent = new EventEmitter(); // is a class from core components
  sendDataToParent() {
    this.nameEvent.emit(this.name);
  }

  constructor(){
    console.log(this.nameBox)  // for dependency injection
  }

  ngOnInit(): void {} // for API

  ngAfterViewInit() {  // for DOM manipulation
    console.log(this.nameBox);
    this.nameBox.nativeElement.focus();
    this.nameBox.nativeElement.style.color = 'red';
  }

}
