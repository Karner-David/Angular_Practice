import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  imports: [],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent {
  // title: string = "Title Default Value";
  title = input.required<string>();
  // isComplete: boolean = false;
  isComplete = signal<boolean>(false);


  toggleComplete() {
    this.isComplete.update((currentValue) => !currentValue)
  }

  isButtonDisabled(): boolean {
    return this.isComplete();
  }
}
