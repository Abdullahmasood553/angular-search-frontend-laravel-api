import { Component, OnInit } from '@angular/core';
import { ProductSearchService } from '../search.service';
import { ApiService } from '../services/api.service';
import {
  Router,
  NavigationExtras
} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  lis:any;
  data: Array<any>;

  constructor(
    private productSearchService: ProductSearchService,
    private router: Router,
    private http: ApiService) {
    this.data = new Array<any>();    
  }

  ngOnInit(): void {
  }


  getProductsSearch(name: any) {
    
    const keyword = name.target.value;
      const search = this.productSearchService.getFilterProductName(keyword)
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
