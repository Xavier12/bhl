import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {throwError as observableThrowError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BhlInterceptorService implements HttpInterceptor {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authOptions = {};
    const token = this.authenticationService.getAccessToken();
    if (token) {
      authOptions = Object.assign(authOptions, {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      });
    }

    if (!token) {
      return next.handle(req);
    }

    const headers = new HttpHeaders(authOptions);
    const authReq = req.clone({headers});
    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {

        if (error.status === 401) {
          this.router.navigateByUrl('/login');
        }
        // return the error to the method that called it
        return observableThrowError(error);
      }));
  }
}
