import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input('MetricID') MetricID;

  constructor() { }

  ngOnInit() {
  }

  closeNav() {
    document.getElementById('NavBar').style.display = 'none';
  }

}
