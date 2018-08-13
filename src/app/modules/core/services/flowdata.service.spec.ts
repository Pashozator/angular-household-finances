import { TestBed, inject } from '@angular/core/testing';

import { FlowdataService } from './flowdata.service';

describe('FlowdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlowdataService]
    });
  });

  it('should be created', inject([FlowdataService], (service: FlowdataService) => {
    expect(service).toBeTruthy();
  }));
});
