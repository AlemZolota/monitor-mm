import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { DataSource } from '@angular/cdk/collections';

export interface EventLog {
  _eventLogUuid: string;
  _evlCreatedDatetime: string;
  _evlCustomMessage: string;
  _evlDefaultMessage: string;
  _evlFunction: string;
  _evlLogLevel: number;
  _evlStackTrace: string;
  _evlUserUuid: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Money Manager Monitoring';

  eventLogCollection: AngularFirestoreCollection<EventLog>;
  eventLogs: Observable<EventLog[]>;

  // TODO move table to own component
  displayedColumns = ['_eventLogUuid', '_evlCreatedDatetime', '_evlCustomMessage',
  '_evlDefaultMessage', '_evlFunction', '_evlLogLevel', '_evlStackTrace', '_evlUserUuid'];
  dataSource;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.eventLogCollection = this.afs.collection('colEventLog');
    this.eventLogs = this.eventLogCollection.valueChanges();
    this.dataSource = new EventLogDataSource(this);
  }
}

export class EventLogDataSource extends DataSource<any> {

  constructor(private eventLogHolder: AppComponent) {
    super();
  }
  connect() {
    return this.eventLogHolder.eventLogs;
  }
  disconnect() {

  }
}
