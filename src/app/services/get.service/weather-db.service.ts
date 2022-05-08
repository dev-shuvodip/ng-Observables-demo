import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IWeatherDB } from 'src/app/models/weather-db.model';
import {
  catchError,
  map,
  Observable,
  throwError
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDBService {

  weatherApi: string = "https://weatherdbi.herokuapp.com/data/weather";

  constructor(private httpclient: HttpClient) { }

  getWeather(location: string): Observable<IWeatherDB> {

    return this.httpclient.get<IWeatherDB>(`${this.weatherApi}/${location}`).pipe(
      map((data: IWeatherDB) => data as IWeatherDB),
      catchError(this.handleError)
    );

  }

  private handleError(err: HttpErrorResponse): Observable<IWeatherDB> {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred: ${err.error.message}`;
    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(err.error));

  }

}
