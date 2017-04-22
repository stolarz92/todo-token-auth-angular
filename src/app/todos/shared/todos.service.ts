import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TodoService {

  // URL da nossa API
  private url: string = 'http://localhost:3000/todos';

  constructor(private http: Http) { }

  // Pega as todos na API
  getTodos() {
    return this.http.get(this.url)
      .map(res => res.json());
  }

  // Pega uma todo na API
  getTodo(id) {
    return this.http.get(this.url + '/' + id)
      .map(res => res.json());
  }

  // Adiciona uma todo na API
  addTodo(todo) {
    return this.http.post(this.url, {'todo': todo})
      .map(res => res.json());
  }

  // Atualiza uma todo na API
  updateTodo(todo) {
    return this.http.put(this.url + '/' + todo.id, {'todo': todo})
      .map(res => res.json());
  }

  // Apaga uma todo no servidor
  deleteTodo(id) {
    return this.http.delete(this.url + '/' + id)
      .map(res => res.json());
  }

}
