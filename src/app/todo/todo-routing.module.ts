import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoFormComponent } from './containers/todo-form.component';
import { TodoSearchComponent } from './containers/todo-search.component';
import { TodoDeactiveGuard } from '../core/guard/todo-deactive.guard';
import { TodoActiveGuard } from '../core/guard/todo-active.guard';

const routes: Routes = [
  {
    path: '',
    component: TodoSearchComponent
  },
  {
    path: 'create',
    component: TodoFormComponent,
    canActivate: [TodoActiveGuard],
    canDeactivate: [TodoDeactiveGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {}
