import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get<any>
    ('http://localhost:3001/');
    // replace 'Https://example.com/api/data' with your actual JSON API endpoint
  }
}
