import { Component } from '@angular/core';
import { OrdinalPipe } from 'src/app/custom-pipes/ordinal.pipe';

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
  ordinalRes: string = '21st';

  convertToOrdinal() {
    const ordinalPipeObj = new OrdinalPipe();
    this.ordinalRes = ordinalPipeObj.transform(this.cardinal)
  }

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'ranjan', sal: 7000, gender: 'female' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'fmale' },
  ];
  search: string = '';
  longStr: string =
    'this is a long string, truncate pipe example,hello hai bye bye';

  arr: number[] = [100, 20, 300, 40, 50];
}
