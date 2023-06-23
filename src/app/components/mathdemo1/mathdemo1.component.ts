import { Component } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-mathdemo1',
  templateUrl: './mathdemo1.component.html',
  styleUrls: ['./mathdemo1.component.css'],
})
export class Mathdemo1Component {
  a = 10;
  b = 20;
  addResult: number = 0;


  constructor(private mathService: MathService) {
    // dependency injection
  }
  ngonInit(): void {
    this.addResult = this.mathService.add(this.a, this.b);
    console.log(`Addition of ${this.a} & ${this.b} is ${this.addResult} `);
  }
}
