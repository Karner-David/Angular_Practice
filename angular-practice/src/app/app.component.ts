import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from "./todos/todo-list/todo-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-practice';

  environment = EnvironmentName.Prod

  message = signal<string>('')

  onKeyUp(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement

    inputElement.value;

    this.message.set(inputElement.value)
  }
}

enum EnvironmentName {
  Dev = 'dev',
  Test = 'test',
  Prod = 'prod'
}
