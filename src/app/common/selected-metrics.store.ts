import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedMetricsStore {

  metrics: any[];
  selectedMetrics: any[];

  constructor() {
    this.metrics = [{id: 1, name: 'M1'}, {id: 3, name: 'M3'}, {id: 5, name: 'M5'}];
    this.selectedMetrics = [{id: 2, name: 'M2'}, {id: 4, name: 'M4'}];
  }

  selectMetric(metric) {
    let ind = this.metrics.findIndex(elem => {
      return elem.id == metric.id;
    });
    this.selectedMetrics.push(this.metrics[ind]);
    this.metrics.splice(ind, 1);
  }

  unselectMetric(metric) {
    let ind = this.selectedMetrics.findIndex(elem => {
      return elem.id == metric.id;
    });
    this.metrics.push(this.selectedMetrics[ind]);
    this.selectedMetrics.splice(ind, 1);
  }
  
}
