import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { CurWeatherComponent } from './cur-weather.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WeatherService } from 'src/app/services/weather.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('CurWeatherComponent', () => {
  let component: CurWeatherComponent;
  let fixture: ComponentFixture<CurWeatherComponent>;
  let weatherServive: WeatherService;

  const europeanCityMockData= [
    {
      coord: {lon:37.5597,lat:55.4997},
      weather:[
        {id:800,main:"Clear",description:"clear sky",icon:"01d"}
      ],
      base:"stations",
      main:{temp:30.56,feels_like:23.97,temp_min:30,temp_max:32,pressure:1032,humidity:69},
      visibility:10000,
      wind:{speed:6.71,deg:200},
      clouds:{all:0},
      dt:1617079531,
      sys:{type:1,id:9029,country:"RU",sunrise:1617073557,sunset:1617120133},
      timezone:10800,
      id:495260,
      name:"Shcher",
      cod:200
    },
    {
      coord: {lon:37.5591,lat:55.4991},
      weather:[
        {id:800,main:"Clear",description:"clear sky",icon:"01d"}
      ],
      base:"stations",
      main:{temp:31.56,feels_like:23.97,temp_min:30,temp_max:32,pressure:1032,humidity:69},
      visibility:10000,
      wind:{speed:6.71,deg:200},
      clouds:{all:0},
      dt:1617079531,
      sys:{type:1,id:9029,country:"RU",sunrise:1617073556,sunset:1617120137},
      timezone:10800,
      id:495261,
      name:"Shcher2",
      cod:200
    },
    {
      coord: {lon:37.5597,lat:55.4997},
      weather:[
        {id:800,main:"Clear",description:"clear sky",icon:"01d"}
      ],
      base:"stations",
      main:{temp:30.58,feels_like:23.97,temp_min:30,temp_max:32,pressure:1032,humidity:69},
      visibility:10000,
      wind:{speed:6.71,deg:200},
      clouds:{all:0},
      dt:1617079531,
      sys:{type:1,id:9029,country:"RU",sunrise:1617073560,sunset:1617120138},
      timezone:10800,
      id:495262,
      name:"Shcher3",
      cod:200
    },
    {
      coord: {lon:37.5597,lat:55.4997},
      weather:[
        {id:800,main:"Clear",description:"clear sky",icon:"01d"}
      ],
      base:"stations",
      main:{temp:38.56,feels_like:23.97,temp_min:30,temp_max:32,pressure:1032,humidity:69},
      visibility:10000,
      wind:{speed:6.71,deg:200},
      clouds:{all:0},
      dt:1617079531,
      sys:{type:1,id:9029,country:"RU",sunrise:1617073568,sunset:1617120115},
      timezone:10800,
      id:495263,
      name:"Shcher4",
      cod:200
    },
    {
      coord: {lon:37.5597,lat:55.4997},
      weather:[
        {id:800,main:"Clear",description:"clear sky",icon:"01d"}
      ],
      base:"stations",
      main:{temp:33.56,feels_like:23.97,temp_min:30,temp_max:32,pressure:1032,humidity:69},
      visibility:10000,
      wind:{speed:6.71,deg:200},
      clouds:{all:0},
      dt:1617079531,
      sys:{type:1,id:9029,country:"RU",sunrise:1617073566,sunset:1617120132},
      timezone:10800,
      id:495264,
      name:"Shche5",
      cod:200
    },  
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurWeatherComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [WeatherService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurWeatherComponent);
    component = fixture.componentInstance;
    weatherServive = TestBed.inject(WeatherService);
    spyOn(weatherServive, 'getWeatherForSeveralCitiesInCircle').and.returnValue(of(europeanCityMockData));
    spyOn(component, 'getWeatherForCitiesInCircle').and.callThrough();
    fixture.detectChanges();
  });

  it('should create CurWeatherComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call getWeatherForCitiesInCircle on CurWeather Component initialization', () => {
    component.ngOnInit();
    expect(component.getWeatherForCitiesInCircle).toHaveBeenCalled();
  });
  
  it('should have getWeatherForCitiesInCircle function', () => {
    expect(component.getWeatherForCitiesInCircle).toBeTruthy();
  });

  it('should set cities on calling getWeatherForCitiesInCircle function', () => {
    component.cities = [];
    component.getWeatherForCitiesInCircle();
    expect(component.cities.length).toEqual(5);
  });

  it('should render cards with city names', () => {
    component.cities = [];
    component.getWeatherForCitiesInCircle();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#card-Shcher').textContent).toContain('Shcher');
    expect(compiled.querySelector('#card-Shcher2').textContent).toContain('Shcher2');
    expect(compiled.querySelector('#card-Shcher3').textContent).toContain('Shcher3');
    expect(compiled.querySelector('#card-Shcher4').textContent).toContain('Shcher4');
    expect(compiled.querySelector('#card-Shche5').textContent).toContain('Shche5');
  });
});

