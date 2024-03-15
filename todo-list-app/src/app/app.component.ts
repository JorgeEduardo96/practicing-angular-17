import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewChecked {

  todoList: any[] = [];
  newTodo = {
    done: false,
    text: ''
  }

  changeTodoDone: boolean = false;

  ngOnInit(): void {
    this.todoList = localStorage.getItem("todoList") ? JSON.parse(localStorage.getItem("todoList")) : this.todoList;
  }

  ngAfterViewChecked(): void {
    if (this.changeTodoDone) {
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
      this.changeTodoDone = false;
      console.log("alterei a lista de todos no localStorage");
    }
  }

  addTodo() {
    if (this.newTodo.text.length > 0) {
      this.todoList.push(this.newTodo);
      this.newTodo = {
        done: false,
        text: ''
      };
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
    } else {
      alert("Preencha o campo.");
    }
  }

  clearAll() {
    this.todoList = [];
    localStorage.setItem("todoList", '');
  }

  changeDone(todo) {
    todo.done = !todo.done;
    this.changeTodoDone = true;
  }

}
