import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }
  getData(data: any) {
    return this.http.post('http://localhost:3000/api/mobile/auth/signup', {}, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    })
  }
}
