import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'selected-metrics-selection-menu',
  templateUrl: './selected-metrics-selection-menu.component.html',
  styleUrls: ['./selected-metrics-selection-menu.component.css']
})
export class SelectedMetricsSelectionMenuComponent implements OnInit {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  
  selectionExpanded: boolean;

  constructor() { this.selectionExpanded = false; }

  ngOnInit() {
  }

  toggleMenu(): void {
    this.trigger.openMenu();
    this.selectionExpanded = !this.selectionExpanded;
  }

}
