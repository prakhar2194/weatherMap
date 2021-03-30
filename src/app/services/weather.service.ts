import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  getWeatherForSeveralCitiesInCircle(lat: number, lon: number, cities=5, units= 'imperial' ): Observable<any>{
    const url = `${environment.apiEndPoint}find?lat=${lat}&lon=${lon}&cnt=${cities}&units=${units}&appid=${environment.appId}`;

    return this.http.get<any>(url).pipe(
      mergeMap(arr => forkJoin(arr.list.map((item) => 
      this.getCityWeatherByName(item.name)
      ))));
  }

  getCityWeatherByName(city: string, units= 'imperial' ): Observable<any>{
    const url = `${environment.apiEndPoint}weather?q=${city}&units=${units}&appid=${environment.appId}`;
    return this.http.get(url);
  }

  get5Days3HourForecast(city: string, units= 'imperial'): Observable<any>{
    const url = `${environment.apiEndPoint}forecast?q=${city}&units=${units}&appid=${environment.appId}`;
    return this.http.get(url);
  }
}
