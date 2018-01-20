import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
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
  selector: 'app-event-log-table',
  templateUrl: './event-log-table.component.html',
  styleUrls: ['./event-log-table.component.css']
})
export class EventLogTableComponent implements OnInit {

  eventLogCollection: AngularFirestoreCollection<EventLog>;
  eventLogs: Observable<EventLog[]>;

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

  constructor(private eventLogHolder: EventLogTableComponent) {
    super();
  }
  connect() {
    return this.eventLogHolder.eventLogs;
  }
  disconnect() {

  }
}
