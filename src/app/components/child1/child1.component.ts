import {
  ChangeDetectionStrategy,
  Component,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  inputs: ['Child1a', 'f1', 'child2', 'pName', 'arr'],
  // changeDetection:ChangeDetectionStrategy.Default,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child1Component {
  Child1a: any;
  f1: any;
  child2: any;
  pName: any;
  arr: any;

  refresh() {
    // this.changeDetectorRef.markForCheck(); this is in cunstructor now
  }

  constructor(private changeDetectorRef: ChangeDetectorRef) {}
  ngDoCheck() {
    // this.changeDetectorRef.markForCheck();
  }
}
