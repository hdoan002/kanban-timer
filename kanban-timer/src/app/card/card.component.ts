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
  cardPriority: string;
  cardDescription: string;
  cardDate: string;

  constructor() { }

  ngOnInit() {
    this.call();
    this.cardTitle = this.cardInput.title;
    this.cardPriority = this.cardInput.priority;
    this.cardDescription = this.cardInput.description;
    this.cardDate = this.cardInput.date;
  }

  call() {
    console.log('hello');
    console.log(this.cardInput);
  }
}
