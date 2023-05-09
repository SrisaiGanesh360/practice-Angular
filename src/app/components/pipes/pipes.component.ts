import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  name: string = 'SrISaI GaNeSh';
  mySal: string = '5000';
  today: Date = new Date();
  emp = { id: 101, name: 'Srisai', sal: 500000 };
  cars: string[] = ['Tata', 'Mahindra', 'Toyota', 'Maruti', 'Hundai', 'Honda'];
  msg: string = '';
  cardinal: number = 21;

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'ranjan', sal: 7000, gender: 'female' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'fmale' },
  ];
}
