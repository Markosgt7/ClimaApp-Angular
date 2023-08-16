import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //lo importo para poder hacer peticiones web
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiKey: string = '85a73d41388e53afaeeea710c6d4ef79';
  URI: string = '';
  constructor(private httpclient: HttpClient) {
    //concatenacion regular
    //this.URI = 'https://api.openweathermap.org/data/2.5/weather?appid='+this.apiKey
    //concatenacion con backtick o tilde inversa
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&lang=es&q=`;
  }

  getWeather(cityName: string, countryCode: string): Observable<any> {
    const url = `${this.URI}${cityName},${countryCode}`;
    return this.httpclient.get(url);
  }
}
