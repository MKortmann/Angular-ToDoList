import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/model/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // add input property from the component dodos, so the input todo will have a type
  // also Todo
  @Input() todo: Todo;
  constructor() {}

  ngOnInit(): void {}
}
