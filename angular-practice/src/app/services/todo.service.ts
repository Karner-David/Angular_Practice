import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todoItem.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos : TodoItem[] = [
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    },
    {
      title: 'Title 5'
    }
  ];

  getTodos(): TodoItem[] {
    return this.todos
  }

  addTodo(todo: string) {
    const newTodoItem: TodoItem = {
      title: todo
    }
    this.todos.push(newTodoItem)
  }
}
