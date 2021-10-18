import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit {
  itemDetail: any = [];
  item_details: any;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    this.route.queryParams.subscribe((response) => {
      if (response) {
        const paramsData = JSON.parse(response.result);
        this.itemDetail = paramsData;
        console.log(paramsData);
      }
    });
  }
  ngOnInit(): void { }

}
