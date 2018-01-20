import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { EventLogFirestoreServiceService } from '../event-log-firestore.service';

@Component({
  selector: 'app-event-log-table',
  templateUrl: './event-log-table.component.html',
  styleUrls: ['./event-log-table.component.css']
})
export class EventLogTableComponent implements OnInit {

  displayedColumns = ['_eventLogUuid', '_evlCreatedDatetime', '_evlCustomMessage',
    '_evlDefaultMessage', '_evlFunction', '_evlLogLevel', '_evlStackTrace', '_evlUserUuid'];
  dataSource;

  constructor(private eventLogService: EventLogFirestoreServiceService) { }

  ngOnInit() {
    this.dataSource = new EventLogDataSource(this.eventLogService);
  }
}

export class EventLogDataSource extends DataSource<any> {

  constructor(private eventLogService: EventLogFirestoreServiceService) {
    super();
  }
  connect() {
    return this.eventLogService.getEventLogs();
  }
  disconnect() { }
}
