import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-cards',
  templateUrl: './employee-cards.component.html',
  styleUrls: ['./employee-cards.component.css'],
  inputs: ['employees']
})
export class EmployeeCardsComponent {
 
employees : any;

}
