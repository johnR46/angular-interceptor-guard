import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoInterceptor } from './core/interceptor/todo-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoInterceptorFackApi } from './core/interceptor/todo-interceptor-fack-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TodoInterceptor,
      multi: true
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TodoInterceptorFackApi,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
