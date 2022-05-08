import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IToDo } from '../models/to-do.model';
import { ToDosService } from '../services/get.service/to-dos.service';

@Component({
  selector: 'to-do-info',
  templateUrl: './to-do-info.component.html',
  styleUrls: ['./to-do-info.component.css']
})
export class ToDoInfoComponent implements OnInit {

  toDoInfo = new Observable<IToDo[]>();
  toDoObj: IToDo[] = [];
  toDoFirstTitle!: string;
  errorMessage!: string;

  constructor(private toDoService: ToDosService) {
    this.toDoInfo = this.toDoService.getTodoObs();  //  calling service to get the Observable
  }

  ngOnInit(): void {
    this.toDoInfo.subscribe({  //  subscribing to the observable
      next: (data: IToDo[]) => {
        this.setToDo(data);  //  calling method to set the value from the next notification to the class property
      },
      error: (err: Error) => {
        this.errorMessage = err.message;
      },
      complete: () => {
        console.log("complete")
      }
    });
  }

  setToDo(toDoObj: IToDo[]) {
    this.toDoObj = toDoObj;
    this.toDoFirstTitle = this.toDoObj[0].title;
    console.log(this.toDoFirstTitle);
  }

}
