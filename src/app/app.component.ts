import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App Super';
  todoArray = [];

  deleteTodo(todo: string) {
    for(let i = 0; i <= this.todoArray.length; i++) {
      if(todo == this.todoArray[i]) {
        this.todoArray.splice(i,1);
      }
    }
  }

  addTodo(value: string) {
    if(value != "") {
      this.todoArray.push(value);
    }
  }
}
