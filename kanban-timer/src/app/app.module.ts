import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Material Imports
import { MatCardModule } from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';

// Angular Module & Component Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
