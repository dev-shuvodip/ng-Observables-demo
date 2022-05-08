import { TestBed } from '@angular/core/testing';

import { WeatherDBService } from './weather-db.service';

describe('WeatherDBService', () => {
  let service: WeatherDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
