import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { elevate } from './selected-metrics.animations';


@Component({
  selector: 'app-selected-metrics',
  templateUrl: './selected-metrics.component.html',
  styleUrls: ['./selected-metrics.component.css'],
  animations: [elevate]
})
export class SelectedMetricsComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  @Output() dropped;
  @Output() deleted;

  metrics: any[];
  hoveredId: number;

  constructor() {
    //variables intialization
    this.dropped = new EventEmitter();
    this.deleted = new EventEmitter();
    this.hoveredId = -1;
    this.metrics = [
      {id: 1, name: 'M1'},
      {id: 2, name: 'M2'},
      {id: 3, name: 'M3'}
    ];
  }

  ngOnInit() {
  }

  onHover(id: number) {
    this.hoveredId = id;
  }

  onLeave() {
    this.hoveredId = -1;
  }

  allowDrop($event) {
    $event.preventDefault();
  }

  drop($event) {
    $event.preventDefault();
    let metric = JSON.parse($event.dataTransfer.getData('metric'));
    this.dropped.emit(metric);
    this.metrics.push(metric);
  }

  removeMetric(metric) {
    console.log(metric);
    let ind = this.metrics.findIndex(elem => {
      return elem.id === metric.id;
    });
    this.metrics.splice(ind, 1);
    this.deleted.emit(metric);
  }

}
