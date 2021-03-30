import { Component, OnInit } from '@angular/core';
import { weatherConstants } from 'src/app/constants/weather.constant';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  public weatherConst = weatherConstants;

  constructor() { }

  ngOnInit(): void {
  }

}
