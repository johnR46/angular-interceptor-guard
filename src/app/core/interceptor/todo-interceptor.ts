import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Injectable()
export class TodoInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // show all of request todo is here !

    const customReq = req.clone({
      headers: req.headers.set('customTodo', 'getUsccess '),
      body: ' name ALlbums'
    });

    return next.handle(customReq);
  }
}
