import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-metrices',
  templateUrl: './metrices.component.html',
  styleUrls: ['./metrices.component.css']
})
export class MetricesComponent implements OnInit {

  metrics = [
    'metrics1',
    'metrics2',
    'metrics3',
    'metrics4',
    'metrics5',
    'metrics6',
    'metrics7',
    'metrics8',
    'metrics9',
    'metrics10',
  ];

  constructor() { }

  ngOnInit() {
  }

}
