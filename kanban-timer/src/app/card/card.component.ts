import { Component, OnInit, Input } from '@angular/core';
import { Card } from './card';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardInput: Card;

  cardTitle: string;
  cardSubtitle: string;
  cardDescription: string;

  constructor() { }

  ngOnInit() {
    this.call();
    this.cardTitle = this.cardInput.title;
    this.cardSubtitle = this.cardInput.subtitle;
    this.cardDescription = this.cardInput.description;
  }

  call() {
    console.log('hello');
    console.log(this.cardInput);
  }
}
