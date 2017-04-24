import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {HomeComponent} from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { TodoFormComponent } from './todos/todo-form/todo-form.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '', pathMatch: 'full', component: TodosComponent },
  { path: 'todos', pathMatch: 'full', component: TodosComponent, canActivate: [AuthGuard] },
  { path: 'todos/new', component: TodoFormComponent, canActivate: [AuthGuard]},
  { path: 'todos/:id', component: TodoFormComponent, canActivate: [AuthGuard]},
  { path: 'todos/:id/edit', component: TodoFormComponent, canActivate: [AuthGuard]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
