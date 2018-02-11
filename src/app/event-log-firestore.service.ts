import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { EventLog } from './event-log';

@Injectable()
export class EventLogFirestoreService {


  eventLogCollection: AngularFirestoreCollection<EventLog>;
  eventLogs: Observable<EventLog[]>;

  constructor(private afs: AngularFirestore) { }

  getEventLogs(): Observable<EventLog[]> {
    this.eventLogCollection = this.afs.collection('colEventLog');
    this.eventLogs = this.eventLogCollection.valueChanges();
    return this.eventLogs;
  }

}
