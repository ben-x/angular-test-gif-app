import { TestBed } from '@angular/core/testing';

import { GetGifService } from './get-gif.service';

describe('GetGifService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetGifService = TestBed.get(GetGifService);
    expect(service).toBeTruthy();
  });
});
