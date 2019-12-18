import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { Card } from './card/card';
import { CardDialogComponent } from './card-dialog/card-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kanban Timer';

  card: Card;

  sampleCard: Card = {
    title: '',
    priority: '',
    description: '',
    list: '',
    date: Date()
  };

  cardList = [
    {
      title: 'Start',
      tasks: [
        this.card = {
          title: 'a',
          priority: 'Something',
          description: 'start',
          list: '',
          date: Date()
        },
        this.card = {
          title: 'b',
          priority: 'Something',
          description: 'start',
          list: '',
          date: Date()
        },
        this.card = {
          title: 'c',
          priority: 'Something',
          description: 'start',
          list: '',
          date: Date()
        },
      ]
    },
    {
      title: 'Middle',
      tasks: [
        this.card = {
          title: 'a',
          priority: 'Something',
          description: 'mid',
          list: '',
          date: Date()
        },
        this.card = {
          title: 'b',
          priority: 'Something',
          description: 'mid',
          list: '',
          date: Date()
        },
        this.card = {
          title: 'c',
          priority: 'Something',
          description: 'mid',
          list: '',
          date: Date()
        },
      ]
    },
    {
      title: 'End',
      tasks: [
        this.card = {
          title: 'a',
          priority: 'Something',
          description: 'end',
          list: '',
          date: Date()
        },
        this.card = {
          title: 'b',
          priority: 'Something',
          description: 'end',
          list: '',
          date: Date()
        },
        this.card = {
          title: 'c',
          priority: 'Something',
          description: 'end',
          list: '',
          date: Date()
        },
      ]
    },
    {
      title: 'End',
      tasks: [
        this.card = {
          title: 'a',
          priority: 'Something',
          description: 'end',
          list: '',
          date: Date()
        },
        this.card = {
          title: 'b',
          priority: 'Something',
          description: 'end',
          list: '',
          date: Date()
        },
        this.card = {
          title: 'c',
          priority: 'Something',
          description: 'end',
          list: '',
          date: Date()
        },
      ]
    }
  ];


  constructor(public dialog: MatDialog) {}


  // [Function]
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

  // [Function]
  openDialog(): void {
    const dialogRef = this.dialog.open(CardDialogComponent, {
      width: '750px',
      data: {
        title: this.sampleCard.title,
        priority: this.sampleCard.priority,
        description: this.sampleCard.description,
        date: this.sampleCard.date}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.card = result;
      console.log('Record data:' + this.card);
      console.log('List selected: ' + this.card.list);
    });
  }


  // [Function]
  saveCard() {
    console.log('Saving card to storage');
    // will send data to update DB
    // need to prompt update to screen
  }


  // [Function]
  addList() {
    console.log('User wants to add new list');
    this.cardList.push({
      title: 'New List',
      tasks: [
        this.card = {
          title: 'Sample',
          priority: 'Extreme',
          description: 'New List',
          list: '',
          date: Date()
        }
      ]
    });
  }


  // [Function]
  setTimer() {
    console.log('User wants to set the timer');
  }

}

