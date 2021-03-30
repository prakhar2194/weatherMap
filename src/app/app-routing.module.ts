import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurWeatherComponent } from './components/cur-weather/cur-weather.component';
import { ForecastWeatherComponent } from './components/forecast-weather/forecast-weather.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: CurWeatherComponent,
    pathMatch: 'full'
  },
  {
    path: 'forecast/:city',
    component: ForecastWeatherComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
