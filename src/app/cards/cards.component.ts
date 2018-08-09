import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards = [
    { cardName: 'First', cardDesc: 'Desc of First'},
    { cardName: 'Second', cardDesc: 'Desc of Second'},
    { cardName: 'Third', cardDesc: 'Desc of Third'},
    { cardName: 'Fourth', cardDesc: 'Desc of Fourth'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
