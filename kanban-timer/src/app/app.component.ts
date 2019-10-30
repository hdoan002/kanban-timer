import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-timer';

  card: Card;

  cardList = [
    {
      title: 'Start',
      tasks: [
        this.card = {
          title: 'a',
          subtitle: 'Something',
          description: 'start',
          date: 'Some'
        },
        this.card = {
          title: 'b',
          subtitle: 'Something',
          description: 'start',
          date: 'Some'
        },
        this.card = {
          title: 'c',
          subtitle: 'Something',
          description: 'start',
          date: 'Some'
        },
      ]
    },
    {
      title: 'Middle',
      tasks: [
        this.card = {
          title: 'a',
          subtitle: 'Something',
          description: 'mid',
          date: 'Some'
        },
        this.card = {
          title: 'b',
          subtitle: 'Something',
          description: 'mid',
          date: 'Some'
        },
        this.card = {
          title: 'c',
          subtitle: 'Something',
          description: 'mid',
          date: 'Some'
        },
      ]
    },
    {
      title: 'End',
      tasks: [
        this.card = {
          title: 'a',
          subtitle: 'Something',
          description: 'end',
          date: 'Some'
        },
        this.card = {
          title: 'b',
          subtitle: 'Something',
          description: 'end',
          date: 'Some'
        },
        this.card = {
          title: 'c',
          subtitle: 'Something',
          description: 'end',
          date: 'Some'
        },
      ]
    }
  ];

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}

