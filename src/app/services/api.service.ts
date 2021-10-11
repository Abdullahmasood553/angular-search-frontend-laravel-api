import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private Url: string;
  constructor(
    private http: HttpClient
  ) {
     this.Url = 'http://127.0.0.1:8000/api';
    // this.Url = 'https://jsonplaceholder.typicode.com/posts';
  }
  public postRequest(link: string, paramaters: any, token?: string) {
    let header = new HttpHeaders();
    header = header.append('Content-Type', 'application/json');
    if (token) {
      header = header.append('Authorization', `Bearer ${token}`);
    }
    return this.http.post<any>(`${this.Url + link}`, JSON.stringify(paramaters), {headers: header});
  }
  public getRequest(link: string, token?: string) {
    if (token) {
      return this.http.get(`${this.Url + link}`);
    } else {
      return this.http.get(`${this.Url + link}`);
    }
  }

  // getTasks(): Observable<Task[]> {
  //   const tasks = of(TASKS);
  //   return tasks;
  //  }

  //   getTasks(): Observable<Task[]> {
  //     return this.http.get<Task[]>(`${this.Url}`);
  //  }
}
