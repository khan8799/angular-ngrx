import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // private API_URL = 'http://localhost:8080/api/';
  private API_URL = 'https://future-tech.onrender.com/api/';
  private token: any;
  private AUTH_HEADER = 'authorization';
  
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = this.setUrl(request);

    request = this.addAuthenticationToken(request);

    return next.handle(request);
  }

  private setUrl(req: HttpRequest<any>): HttpRequest<any> {
    let url = this.API_URL + req.url;
    return req.clone({ url });
  }

  private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    this.token = localStorage.getItem('token');
    if (this.token === null) return request;

    return request.clone({ headers: request.headers.set(this.AUTH_HEADER, this.token) });
  }
}
