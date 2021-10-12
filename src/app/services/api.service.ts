import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private Url: string;
  constructor(
    private http: HttpClient
  ) {
     this.Url = 'http://127.0.0.1:8000/api';
  }

  public getRequest(link: string, token?: string) {
    if (token) {
      return this.http.get(`${this.Url + link}`);
    } else {
      return this.http.get(`${this.Url + link}`);
    }
  }
}
