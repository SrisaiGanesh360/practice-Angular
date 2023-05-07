import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  name: string = 'SrISaI GaNeSh';
  mySal: string = '5000';
  today: Date = new Date();
  emp = { id : 101, name : 'Srisai', sal: 500000 };
  cars: string[] = ['Tata', 'Mahindra', 'Toyota', 'Maruti', 'Hundai', 'Honda'];
}
