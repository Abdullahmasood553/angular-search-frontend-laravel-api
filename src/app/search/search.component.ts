import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  lis:any;
  data: Array<any>;

  constructor(
    private dataService: DataService,
    private router: Router) {
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
