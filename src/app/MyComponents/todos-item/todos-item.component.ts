import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.css'],
})
export class TodosItemComponent implements OnInit {
  @Input() todo: Todo;

  @Output() public todoDelete: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    //whatever todo is deleting parent coponent will get know
    console.log('Deleted has been occured');
  }

  onCheckboxClick(todo) {}
}
