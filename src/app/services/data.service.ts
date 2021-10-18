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
  
      // Get Product By Filter Name
      getFilterProductName(name: string) {
        const response = new Promise(resolve => {
          this.http.get(environment.apiUrl + `/products/search_product?search_product=${name}`).subscribe(data => {          
            resolve(data);
          }, err => {
            console.log(err);
          });
        }); 
        return response;
      }
  }

