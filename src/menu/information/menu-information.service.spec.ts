import { TestBed } from '@angular/core/testing';

import { MenuInformationService } from './menu-information.service';

describe('MenuInformationService', () => {
  let service: MenuInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
