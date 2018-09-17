import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  get(path: string): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`)
    // .map((res) => res)
    // .catch(this.formatErrors);
  }
  delete(path: string): Observable<any> {
    return this.http.delete(`${environment.api_url}${path}`)
    // .map((res) => res)
    // .catch(this.formatErrors);
  }
  private formatErrors(error: any) {
    return Observable.throw(error);
  }

  put(body: Object = {}, path): Observable<any> {
    return this.http.put(`${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.getHeaders() }
    )
    // .map((res: Response) => res.json())
    // .catch(this.formatErrors);
  }

  post(body: Object = {}, path): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`,
      JSON.stringify(body),
      { headers: this.getHeaders() }
    )
  }

  private getHeaders(): HttpHeaders {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
    };

    return httpOptions.headers;
  }

  public getLanguageBundle(language: string, path: string) {
    return this.http.get(`${environment.api_url}${path}`)
  }

  putTextHandler(body: Object = {}, path): Observable<any> {
    return this.http.put(`${environment.api_url}${path}`,
      JSON.stringify(body), { responseType: 'text', headers: this.getHeaders() })
  }

}
