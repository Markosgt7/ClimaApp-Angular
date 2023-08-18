import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  myWeather: any;
  city: string = '';
  temp: number = 0;
  sensacion: number = 0;
  climaGeneral: string = '';
  min: number = 0;
  max: number = 0;
  humedad: number = 0;
  viento: number = 0;
  icono: string = '';
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather('Bogota').subscribe({
      next: (res) => {
        this.myWeather = res;
        this.temp = this.myWeather.main.temp;
        this.city = this.myWeather.name;
        this.climaGeneral = this.myWeather.weather[0].description;
        this.sensacion = this.myWeather.main.feels_like;
        this.min = this.myWeather.main.temp_min;
        this.max = this.myWeather.main.temp_max;
        this.humedad = this.myWeather.main.humidity;
        this.viento = this.myWeather.wind.speed;
        this.icono =
          'https://openweathermap.org/img/wn/' +
          this.myWeather.weather[0].icon +
          '@2x.png';
      },
      error: (err) => console.info('Error:', err.message),
    });
  }
}
