import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Card } from '../card/card';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.css']
})
export class CardDialogComponent implements OnInit {

  listArray = ['Start', 'Middle', 'End'];
  listSelect: string;

  constructor(public dialogRef: MatDialogRef<CardDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Card) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
