import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedMetricsStore {

  metrics: any[];
  selectedMetrics: any[];

  constructor() {
    this.metrics = [
      {id: 1, name: 'M1'}, 
      {id: 3, name: 'M3'}, 
      {id: 5, name: 'M5'},
      {id: 6, name: 'M6'}, 
      {id: 7, name: 'M7'}, 
      {id: 8, name: 'M8'},
      {id: 9, name: 'M9'}, 
      {id: 10, name: 'M10'}, 
      {id: 11, name: 'M11'},
      {id: 12, name: 'M12'}, 
      {id: 13, name: 'M13'}, 
      {id: 14, name: 'M14'},
      {id: 15, name: 'M15'}, 
      {id: 16, name: 'M16'},
      {id: 17, name: 'M17'}, 
      {id: 18, name: 'M18'}, 
      {id: 19, name: 'M19'},
      {id: 20, name: 'M20'}, 
      {id: 21, name: 'M21'}, 
      {id: 22, name: 'M22'},
      {id: 23, name: 'M23'}, 
      {id: 24, name: 'M24'}, 
      {id: 25, name: 'M25'},
    ];
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

  removeAllMetrics() {
    let i = 0;
    for(i; i < this.selectedMetrics.length; i++) {
      this.metrics.push(this.selectedMetrics[i]);
    }
    this.selectedMetrics.splice(0, this.selectedMetrics.length);
  }
  
}
