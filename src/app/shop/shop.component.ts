import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ShopService } from '../services/shop.service';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
 
  products!: Product[];
  brands!: any[]
  types!: any[]

  constructor(private shopService: ShopService){}

  ngOnInit(): void {
      this.getProductList();
      this.getBrands();
      this.getTypes();
  }

  getProductList(){
    this.shopService.getProducts().subscribe(
      res => {
        console.log(res)
        if(res && res.data && res.data.content){
          this.products = res.data.content
        }
      },
      err => console.log(err)
    )
  }

  getBrands(){
    this.shopService.getBrands().subscribe(
      response => {
        
          console.log(response)
          this.brands = response
        
      },
      error => {
        console.log(error)
      }
  )
  }

  getTypes(){
    this.shopService.getTypes().subscribe(
      response => {
        console.log(response)
      this.types = response
      },
      error => {
        console.log(error)
      }
  )
  }
}
