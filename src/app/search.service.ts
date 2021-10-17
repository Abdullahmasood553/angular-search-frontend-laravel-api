import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
  
  @Injectable({
    providedIn: 'root'
  })
  export class ProductSearchService {
  
  constructor(private http: HttpClient) { }
  
    // Get Product By Filter Name
    getFilterProductName(name: string) {
      const response = new Promise(resolve => {
        this.http.get(environment.apiUrl + `/products/search_product?search_by_name=${name}`).subscribe(data => {          
          resolve(data);
        }, err => {
          console.log(err);
        });
      }); 
      return response;
    }
 }