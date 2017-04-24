import { Component, OnInit } from '@angular/core';
// Importa nosso Service
import { TodoService } from './shared/todo.service';
// Importa nosso model
import {Todo} from './shared/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {

  private todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  // Pega a listagem de Todos ao iniciar
  ngOnInit() {
    this.todoService.getTodos()
      .subscribe(data => this.todos = data);
    var token = localStorage.getItem('id_token');
    console.log('zapisany token:', token);
  }

  // Apaga a questão
  deleteTodo(todos) {
    if (confirm('Você tem certeza que quer deletar a todos ' + todos.title + '?')) {
      var index = this.todos.indexOf(todos);
      this.todos.splice(index, 1);

      this.todoService.deleteTodo(todos.id)
        .subscribe(null);
    }
  }

}
