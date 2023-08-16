import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Aplicación del clima - by Markos';

  constructor() {}
  ngOnInit() {
    /*   this.weatherService.getWeather('london', 'uk').subscribe(
      (res) => console.log(res),
      (err) => console.log(res) */
  }
}
