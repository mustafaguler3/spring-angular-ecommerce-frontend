import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginatorModule } from 'primeng/paginator';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from 'primeng/api';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    PaginatorModule,
    PaginationModule.forRoot()
  ],
  exports:[ShopComponent]
})
export class ShopModule { }
