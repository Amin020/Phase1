import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-metrices',
  templateUrl: './metrices.component.html',
  styleUrls: ['./metrices.component.css']
})
export class MetricesComponent implements OnInit {

  @Input()
  set deletedMetric(metric: {id: number, name: string}) {
    if(metric) {
      let ind = this.metrics.findIndex(elem => {
        return elem.id === metric.id;
      });
      this.metrics.splice(ind, 1);
    }
  }

  @Input()
  set setMetric(metric: {id: number, name: string}) {
    if(metric) {
      this.metrics.push(metric);
    }
  }
  metrics = [
    {id: 4, name: 'M4'},
    {id: 5, name: 'M5'},
    {id: 6, name: 'M6'},
    {id: 7, name: 'M7'},
    {id: 8, name: 'M8'},
    {id: 9, name: 'M9'},
    {id: 10, name: 'M10'}
  ];

  constructor() { }

  ngOnInit() {
  }

  drag($event, metric) {
    $event.dataTransfer.setData('metric', JSON.stringify(metric));
  }

}
