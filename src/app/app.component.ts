import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  //data: Array<any>;
  lis:any;
  data: Array<any>;
  
  constructor(
    private dataService: DataService,
    private router: Router,
    private http: DataService) {
    this.data = new Array<any>();    
  }

  ngOnInit(): void { }

  getProductsSearch(name: any) {
    
    const keyword = name.target.value;
      const search = this.dataService.getFilterProductName(keyword)
          .then(response => {
            this.lis = response;
          });
  }

  getProductFilter() {
    this.http.getRequest('search_by_name').subscribe((res: any) => {})
  }

  // Page Navigation to item details
  getDetailPage(result:any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        result: JSON.stringify(result)
      }
    };
    this.router.navigate(['search'], navigationExtras);
  }
}
