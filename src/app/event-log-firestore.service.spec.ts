import { TestBed, inject } from '@angular/core/testing';

import { EventLogFirestoreServiceService } from './event-log-firestore.service';

describe('EventLogFirestoreServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventLogFirestoreServiceService]
    });
  });

  it('should be created', inject([EventLogFirestoreServiceService], (service: EventLogFirestoreServiceService) => {
    expect(service).toBeTruthy();
  }));
});
