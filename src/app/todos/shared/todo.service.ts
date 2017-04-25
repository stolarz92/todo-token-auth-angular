import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TodoService {

  // URL da nossa API
  private url: string = 'http://localhost:3000/todos';
  private token: string = localStorage.getItem('id_token');
  constructor(private http: Http) { }

  // Pega as todos na API
  setHeaders() {
    let headers = new Headers({'Content-Type': 'application/json'});
    headers.append('Authorization', 'Bearer ' + this.token)
    let options = new RequestOptions({headers: headers});
    return options
  }

  getTodos() {
    var options = this.setHeaders();
    return this.http.get(this.url, options)
      .map(res => res.json());
  }

  // Pega uma todo na API
  getTodo(id) {
    var options = this.setHeaders();
    return this.http.get(this.url + '/' + id, options)
      .map(res => res.json());
  }

  // Adiciona uma todo na API
  addTodo(todo) {
    var options = this.setHeaders();
    return this.http.post(this.url, {'todo': todo}, options)
      .map(res => res.json());
  }

  // Atualiza uma todo na API
  updateTodo(todo) {
    var options = this.setHeaders();
    return this.http.put(this.url + '/' + todo.id, {'todo': todo}, options)
      .map(res => res.json());
  }

  changeTodoStatus(id) {
    var options = this.setHeaders();
    return this.http.post(this.url + '/' + id + '/change_todo_status', options)
    .map(res => res.json());
  }

  // Apaga uma todo no servidor
  deleteTodo(id) {
    var options = this.setHeaders();
    return this.http.delete(this.url + '/' + id, options)
      .map(res => res.json());
  }

}
