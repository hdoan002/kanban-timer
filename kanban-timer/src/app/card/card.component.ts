import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title = 'Sample title';
  @Input() subtitle = 'Extreme';
  description = 'Something will go here';


  constructor() { }

  ngOnInit() {
  }
}
