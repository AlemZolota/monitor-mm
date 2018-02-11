import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MatTableModule } from '@angular/material/table';
import { EventLogTableComponent } from './event-log-table/event-log-table.component';
import { EventLogFirestoreService } from './event-log-firestore.service';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {LoginService} from './login.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    EventLogTableComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [EventLogFirestoreService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
