import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable()
export class TodoInterceptorFackApi implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const valuepre = {
      id: 1,
      userId: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'sdsd'
    };

    // return next.handle(req);

    return of(
      new HttpResponse({
        status: 200,
        body: valuepre
      })
    );
  }
}
