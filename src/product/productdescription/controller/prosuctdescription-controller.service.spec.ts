import { TestBed } from '@angular/core/testing';

import { ProsuctdescriptionControllerService } from './prosuctdescription-controller.service';

describe('ProsuctdescriptionControllerService', () => {
  let service: ProsuctdescriptionControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProsuctdescriptionControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
