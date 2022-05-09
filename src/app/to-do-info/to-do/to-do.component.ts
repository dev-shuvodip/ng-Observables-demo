import { Component, Input, OnInit } from '@angular/core';
import { IToDo } from 'src/app/models/to-do.model';

@Component({
  selector: 'to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  @Input('toDo') toDo!: IToDo;

  constructor() { }

  ngOnInit(): void {
  }

}
