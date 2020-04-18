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
    // delete item in ui ---> it can be putted also inside subscribe
    this.todos = this.todos.filter((item) => item.id !== todo.id);

    // delete item in server
    this.todoService.deleteTodo(todo).subscribe(() => {
      console.log('deleted in the server');
    });
  }
}
