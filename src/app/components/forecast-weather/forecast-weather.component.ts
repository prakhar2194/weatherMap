import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';
import { weatherConstants } from 'src/app/constants/weather.constant';

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.scss']
})
export class ForecastWeatherComponent implements OnInit {

  public city='';
  public forecastedWeatherReport = [];
  public isLoading = false;
  public weatherConst = weatherConstants;
  
  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute) { }

  /**
   * subscribes the city parameter and gets the 5 days 3 hour forecast data and filters for 9 AM
   */
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.city = params['city'];
      this.isLoading = true;
      this.weatherService.get5Days3HourForecast(this.city).subscribe(result=>{
        this.forecastedWeatherReport = result.list.filter(item=>{
          return item.dt_txt.includes('09:00:00');
        })
        this.isLoading = false;
      },
      error=>{
        this.isLoading = false;
      // TODO: Add error toaster here
      })
   });
  }
}
