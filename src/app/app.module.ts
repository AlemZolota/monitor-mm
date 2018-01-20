import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { MatTableModule } from '@angular/material/table';
import { EventLogTableComponent } from './event-log-table/event-log-table.component';


@NgModule({
  declarations: [
    AppComponent,
    EventLogTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
