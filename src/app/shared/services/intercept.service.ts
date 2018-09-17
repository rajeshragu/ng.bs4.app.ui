import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpResponse,
	HttpErrorResponse
} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';


@Injectable()//{providedIn: 'root'}

export class InterceptService implements HttpInterceptor {

	constructor(private authService: AuthService) { }

	// intercept request and add token
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		// modify request
		request = request.clone({
			setHeaders: {
				Authorization: `Bearer ${localStorage.getItem('MY_TOKEN')}`
			}
		});

		console.log("----request----");

		console.log(request);

		console.log("--- end of request---");


		return next.handle(request)
			.pipe(
				tap(event => {
					if (event instanceof HttpResponse) {
						console.log(event.status);
					}
				}, error => {
					console.log("----response----");
					console.error("status code:", error.status);
					if (error instanceof HttpErrorResponse && error.status === 0) {
						console.error('Check Your Internet Connection And Try Again Later');
					} else {
						console.error(error.message);
					}
					console.log("--- end of response---");
				})
			)

	};


}