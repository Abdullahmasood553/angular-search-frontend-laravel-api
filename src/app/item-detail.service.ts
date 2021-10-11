import {
    Injectable
  } from '@angular/core';
  import {
    HttpClient
  } from '@angular/common/http';

  import {
    ApiService
  } from './services/api.service';
  
  
  
  @Injectable({
    providedIn: 'root'
  })
  export class ItemDetailService {

     apiUrl = 'http://127.0.0.1:8000/api';
  
    
      constructor(private http: HttpClient, private apiService: ApiService) { }
  
    // Get Product By Filter Name
    getFilterProductName(name: string) {
      const response = new Promise(resolve => {
        this.http.get(this.apiUrl + `/products/backend?search_by_name=${name}`).subscribe(data => {          
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
      
      return response;
    }

   }