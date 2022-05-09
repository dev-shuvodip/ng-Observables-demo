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

  toDos = new Observable<IToDo[]>();
  errorMessage!: string;

  constructor(private toDoService: ToDosService) {
    this.toDos = this.toDoService.getTodoObs();  //  calling service to get the Observable
  }

  ngOnInit(): void {
    this.toDos.subscribe({  //  subscribing to the observable
      next: (data: IToDo[]) => {
        data.forEach(
          (toDo: IToDo) => {
            console.log(`{\n\tuserId: ${toDo.userId},\n\tid: ${toDo.id},\n\ttitle: "${toDo.title}",\n\tcompleted: ${toDo.completed}\n}`);
          })
      },
      error: (err: Error) => {
        this.errorMessage = err.message;
      },
      complete: () => {
        console.log("complete")
      }
    });
  }

}
