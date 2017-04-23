import { Component, OnInit } from '@angular/core';
// Importa nosso service para conseguirmos falar com a API
import { TodoService } from '../shared/todo.service';
// Importa nosso Model
import {Todo} from '../shared/todo';
// Importa o Router para podermos conseguir pegar o parâmetro id
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.sass']
})
export class TodoFormComponent implements OnInit {

  // Cria uma variável string para falarmos se é uma edição ou criação de Todo
  title: string;
  // Pega nosso Model e coloca na variável todo
  todo: Todo = new Todo();

  constructor(
    //Declara nossas dependências
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  // Esse método rola enquanto a página é carregada para preencher
  // a todo caso seja edição
  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Edit Todo' : 'Create Todo';

      if (!id) {
        return;
      } else {
        this.todoService.getTodo(id)
          .subscribe(
            todo => this.todo = todo,
            response => {});
      }
    });
  }

  // Nós chamamos esse método no form quando estamos prontos para criar
  // uma questão ou editar
  save() {
    let result;

    if (this.todo.id) {
      result = this.todoService.updateTodo(this.todo);
    } else {
      result = this.todoService.addTodo(this.todo);
    }

    result.subscribe(data => this.router.navigate(['/todos']));
  }

}
