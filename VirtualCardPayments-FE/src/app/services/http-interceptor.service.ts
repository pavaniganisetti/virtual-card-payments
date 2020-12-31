import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private cookieService: CookieService,) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(

      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) { //client side error
          errorMsg = ` ${error.error}`;
        }
        else {
          errorMsg = ` ${error.error}`;
          if (errorMsg === " Session Expired!") {
            Swal.fire({
              title: "Session Expired",
              icon: "info",
              width: "400px"
            }).then(() => {
              this.router.navigate(['/login'])
              localStorage.clear()
              this.cookieService.delete('login')
            })
          }
          return throwError(errorMsg);
        }
        window.alert(errorMsg)
        return throwError(errorMsg);
      })
    )
  }
}