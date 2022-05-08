import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeatherDB } from '../models/weather-db.model';
import { WeatherDBService } from '../services/get.service/weather-db.service';

@Component({
  selector: 'weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {

  weatherInfo: IWeatherDB[] = [];
  errorMessage!: string;
  locations: string[] = ["Kolkata", "London", "Mumbai", "Darjeeling"];

  constructor(private weatherService: WeatherDBService) {

  }

  getWeatherInfo() {

    this.locations.forEach(location => {
      this.weatherService.getWeather(location)
        .subscribe({
          next: (response: IWeatherDB) => {
            this.weatherInfo.push(response);
          },
          error: (error: Error) => this.errorMessage = error.message,
          complete: () => console.info("completed")
        });
    });

  }

  ngOnInit(): void {
    this.getWeatherInfo();
    console.log(this.weatherInfo);
  }

}
