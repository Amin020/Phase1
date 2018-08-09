import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'selected-metric-options-menu',
  templateUrl: './selected-metric-options-menu.component.html',
  styleUrls: ['./selected-metric-options-menu.component.css']
})
export class SelectedMetricOptionsMenuComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.trigger.openMenu();
  }

}
