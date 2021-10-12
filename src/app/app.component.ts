import { Component, OnInit } from '@angular/core';
import { ItemDetailService } from './search.service';
import { ApiService } from './services/api.service';


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
    private itemDetailService: ItemDetailService,
    private http: ApiService) {
    this.data = new Array<any>();
    
  }

  ngOnInit(): void { }

  getProductsSearch(name: any) {
    
    const keyword = name.target.value;
      const search = this.itemDetailService.getFilterProductName(keyword)
          .then(response => {
            this.lis = response;
          });
  }

  getProductFilter() {
    this.http.getRequest('search_by_name').subscribe((res: any) => {})
  }
}
