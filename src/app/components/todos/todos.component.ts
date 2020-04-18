import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../model/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  // life cycle method
  ngOnInit(): void {
    // this is asynchronous. .subscribe = .then
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  deleteInTodos(todo: Todo) {
    console.log('delete me');
  }
}
