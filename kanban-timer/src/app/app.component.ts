import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // [Function]
  addList() {
    console.log('User wants to add new list');
    this.cardList.push({
      title: 'New List',
      tasks: [
        this.card = {
          title: 'Sample',
          subtitle: 'Extreme',
          description: 'New List',
          date: 'Some'
        }
      ]
    });
  }


  // [Function]
  setTimer() {
    console.log('User wants to set the timer');
  }

}

