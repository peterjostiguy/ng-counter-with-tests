import { Component, OnInit } from '@angular/core';
import { Counter } from '../counter'

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  name = 'Counter Wall'
  counters: Counter[];

  create = () => {
    const counter = new Counter();
    this.counters.push(counter);
    console.log(this.counters);
  }

  constructor() {
    this.counters = [];
  }

  ngOnInit() {
  }

}
