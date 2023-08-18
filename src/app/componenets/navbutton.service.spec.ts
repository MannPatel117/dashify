import { TestBed } from '@angular/core/testing';

import { NavbuttonService } from './navbutton.service';

describe('NavbuttonService', () => {
  let service: NavbuttonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbuttonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
