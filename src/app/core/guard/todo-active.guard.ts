import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { TodoApiService } from 'src/app/todo/service/todo-api.service';
import { filter } from 'rxjs/operators';
import { TodoSearchComponent } from 'src/app/todo/containers/todo-search.component';

@Injectable({
  providedIn: 'root'
})
export class TodoActiveGuard implements CanActivate {
  constructor(private servTodo: TodoApiService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
}
