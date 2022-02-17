import { TestBed } from '@angular/core/testing';

import { ProductviewControllerService } from './productview-controller.service';

describe('ProductviewControllerService', () => {
  let service: ProductviewControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductviewControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
