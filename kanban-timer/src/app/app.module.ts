import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';

// NGX Countdown Imports
import { CountdownModule } from 'ngx-countdown';

// Angular Module & Component Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { CardDialogComponent } from './card-dialog/card-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    DragDropModule,
    CountdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CardDialogComponent],
})
export class AppModule { }
