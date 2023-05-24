import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
  outputs: ['addEmpEvent']
})
export class EmployeeAddComponent {

  addEmpEvent = new EventEmitter();
  addEmp(a: any, b: any, c: any) {
    const newEmp = {
      eid: a,
      name: b,
      sal: c,
    };
    this.addEmpEvent.emit(newEmp);
  }
}
