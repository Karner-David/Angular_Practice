import { Component, inject } from '@angular/core';
import { TodoListItemComponent } from "../todo-list-item/todo-list-item.component";
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  imports: [TodoListItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todoService = inject(TodoService)

  todos = this.todoService.getTodos()

  onAddTodo(text: string) {
     this.todoService.addTodo(text);
     this.todos = this.todoService.getTodos();
  }
}




