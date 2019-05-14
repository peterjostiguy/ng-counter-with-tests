import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../counter'

@Component({
  selector: 'counter',
  templateUrl: './counter-detail.component.html',
  styleUrls: ['./counter-detail.component.css']
})
export class CounterDetailComponent implements OnInit {
  @Input() counter: Counter;

  increment = () => {
    this.counter.value ++;
  }

  decrement = () => {
    this.counter.value --;
  }
  constructor() {
    this.counter = new Counter();
  }

  ngOnInit() {
  }

}
