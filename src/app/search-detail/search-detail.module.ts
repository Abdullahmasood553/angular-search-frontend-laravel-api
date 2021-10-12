import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';



import { SearchDetailComponent } from './search-detail.component';

const routes: Routes = [
  {
    path: '',
    component: SearchDetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchDetailComponent],
})
export class SearchDetailModule {}
