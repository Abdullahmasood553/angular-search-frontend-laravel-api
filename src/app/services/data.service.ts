import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) { }
  public getRequest(link: string) {
      return this.http.get(`${environment.apiUrl + link}`);
    } 
  }

