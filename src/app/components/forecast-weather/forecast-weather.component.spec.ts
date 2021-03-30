import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastWeatherComponent } from './forecast-weather.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';

describe('ForecastWeatherComponent', () => {
  let component: ForecastWeatherComponent;
  let fixture: ComponentFixture<ForecastWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastWeatherComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [WeatherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ForecastWeatherComponent', () => {
    expect(component).toBeTruthy();
  });
});
