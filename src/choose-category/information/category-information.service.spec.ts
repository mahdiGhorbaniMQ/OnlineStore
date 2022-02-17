import { TestBed } from '@angular/core/testing';

import { CategoryInformationService } from './category-information.service';

describe('CategoryInformationService', () => {
  let service: CategoryInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
