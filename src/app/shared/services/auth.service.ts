import { ApiConstants } from '../constants/api.constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public authenticate(): Observable<any> {
    let path = ApiConstants._SECURITY_AUTHENTICATE;
    return this.http.get(`${environment.api_url}${path}`, { responseType: 'text', observe: 'response' })
      .map((res) => res)
      .catch((err)=> err)
  }
}
