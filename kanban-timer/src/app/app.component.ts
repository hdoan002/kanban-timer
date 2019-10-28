import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-timer';
  stuffing = [
    {
      title: 'Todo',
      tasks : ['Get somewhere', 'something']
    },
    {
      title: 'In Progress',
      tasks : ['Get somewheree', 'somethingg']
    },
    {
      title: 'Done',
      tasks : ['Get somewheree', 'somethingg']
    },
  ];
  // This variable is property binded to card title
  cardTitle = 'Test title';
  cardPriority = 'Low';


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

