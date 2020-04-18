import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/model/Todo';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // add input property from the component dodos, so the input todo will have a type
  // also Todo
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true, //true, means the todo class muss be added
      'is-complete': this.todo.completed,
    };
    return classes;
  }

  onToggle(todo) {
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server
    this.todoService
      .toggleCompleted(todo)
      .subscribe((todo) => console.log(todo));
  }

  // we will fired an event upwards to todos that fired another event to todo.service
  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
