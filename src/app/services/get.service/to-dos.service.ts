import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { IToDo } from 'src/app/models/to-do.model';

@Injectable({
  providedIn: 'root'
})
export class ToDosService {

  toDoApi: string = "https://jsonplaceholder.typicode.com/todos";
  toDos: IToDo[] = [];

  constructor(private httpclient: HttpClient) { }

  getTodoObs(): Observable<IToDo[]> {
    return this.httpclient.get<IToDo[]>(this.toDoApi);
  }

  private handleError(err: HttpErrorResponse): Observable<IToDo> {
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
