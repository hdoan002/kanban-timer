import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { Card } from './card/card';
import { CardDialogComponent } from './card-dialog/card-dialog.component';
import { DatePipe } from '@angular/common';

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
    date: this.datepipe.transform(Date(), 'MM/dd/yyyy')
  };

  cardList = [
    {
      title: 'Back log',
      tasks: [
        this.card = {
          title: 'Finish my Favorite Game',
          priority: 'Low',
          description: 'Finish building my game and get it hosted!',
          list: '',
          date: this.datepipe.transform(Date(), 'MMM dd, yyyy')
        },
        this.card = {
          title: 'Hike the Long Path North Trail',
          priority: 'Extreme',
          description: 'Go for a hike and take in nature',
          list: '',
          date: this.datepipe.transform(Date(), 'MMM dd, yyyy')
        },
        this.card = {
          title: 'Ride the London Underground',
          priority: 'Extreme',
          description: 'Enjoy London from underneath',
          list: '',
          date: this.datepipe.transform(Date(), 'MMM dd, yyyy')
        },
      ]
    },
    {
      title: 'In progress',
      tasks: [
        this.card = {
          title: 'Leave a Note in a Library Book',
          priority: 'Low',
          description: 'Pass on a happy note',
          list: '',
          date: this.datepipe.transform(Date(), 'MMM dd, yyyy')
        },
        this.card = {
          title: 'Laugh Daily',
          priority: 'Extreme',
          description: 'Be happy',
          list: '',
          date: this.datepipe.transform(Date(), 'MMM dd, yyyy')
        },
        this.card = {
          title: 'Cruise the Caribbean',
          priority: 'Extreme',
          description: 'Explore the world',
          list: '',
          date: this.datepipe.transform(Date(), 'MMM dd, yyyy')
        },
      ]
    },
    {
      title: 'Review',
      tasks: [
        this.card = {
          title: 'Learn 100 Basic American Sign Language Signs',
          priority: 'Extreme',
          description: 'Keep learn',
          list: '',
          date: this.datepipe.transform(Date(), 'MMM dd, yyyy')
        },
        this.card = {
          title: 'Dive the Great Barrier Reef',
          priority: 'Extreme',
          description: 'Explore life underwater',
          list: '',
          date: this.datepipe.transform(Date(), 'MMM dd, yyyy')
        },
        this.card = {
          title: 'Quit Caffeine',
          priority: 'Low',
          description: 'Take control of my coffee budget!',
          list: '',
          date: this.datepipe.transform(Date(), 'MMM dd, yyyy')
        },
      ]
    },
    {
      title: 'Completed',
      tasks: [
        this.card = {
          title: 'Invest in a Business',
          priority: 'Extreme',
          description: 'Fund another business',
          list: '',
          date: this.datepipe.transform(Date(), 'MMM dd, yyyy')
        },
        this.card = {
          title: 'Be a True Inspiration to Someone',
          priority: 'Extreme',
          description: 'Always push others forward',
          list: '',
          date: this.datepipe.transform(Date(), 'MMM dd, yyyy')
        },
        this.card = {
          title: 'Make Homemade Bagels',
          priority: 'Extreme',
          description: 'I like bagels',
          list: '',
          date: this.datepipe.transform(Date(), 'MMM dd, yyyy')
        },
      ]
    }
  ];


  constructor(public dialog: MatDialog, public datepipe: DatePipe) {}


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
          date: this.datepipe.transform(Date(), 'MMM dd, yyyy')
        }
      ]
    });
  }


  // [Function]
  setTimer() {
    console.log('User wants to set the timer');
  }

}

