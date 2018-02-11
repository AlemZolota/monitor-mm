import { TestBed, inject } from '@angular/core/testing';

import { EventLogFirestoreService } from './event-log-firestore.service';

describe('EventLogFirestoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventLogFirestoreService]
    });
  });

  it('should be created', inject([EventLogFirestoreService], (service: EventLogFirestoreService) => {
    expect(service).toBeTruthy();
  }));
});
