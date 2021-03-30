import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Router } from '@angular/router';
import { weatherConstants } from 'src/app/constants/weather.constant';

@Component({
  selector: 'app-cur-weather',
  templateUrl: './cur-weather.component.html',
  styleUrls: ['./cur-weather.component.scss']
})
export class CurWeatherComponent implements OnInit {

  public cities =[];
  public isLoading= false;
  public weatherConst = weatherConstants;

  constructor(private weatherService: WeatherService, private route: Router) { }

  ngOnInit(): void {
    this.getWeatherForCitiesInCircle();
  }

  /**
   * gets the weather condition for specified number of cities in circle from a center point with latitude and logitude
   */
  getWeatherForCitiesInCircle(){
    this.isLoading = true;
    this.weatherService.getWeatherForSeveralCitiesInCircle(55.5, 37.5).subscribe(res=>{
      this.cities = res;
      this.isLoading = false;
    },
    error=>{
      this.isLoading = false;
      // TODO: Add error toaster here
    });
  }

}
