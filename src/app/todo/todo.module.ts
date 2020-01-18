import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoFormComponent } from './containers/todo-form.component';
import { TodoSearchComponent } from './containers/todo-search.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { from } from 'rxjs';
import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import { TodoDirective } from './shared/directive/todo.directive';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [TodoFormComponent, TodoSearchComponent, TodoDirective],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class TodoModule {}
