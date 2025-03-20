import { TestBed } from '@angular/core/testing';

import { TetrisStateServiceService } from './tetris-state-service.service';

describe('TetrisStateServiceService', () => {
  let service: TetrisStateServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TetrisStateServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
