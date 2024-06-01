import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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

  selectedBrand: number | undefined
  selectedType: number | undefined
  selectedKeyword: string | undefined

  pageNumber: number = 0;
  pageSize: number = 6;
  totalCount!:number;

  @ViewChild("search") searchTerm!: ElementRef

  constructor(private shopService: ShopService){}

  ngOnInit(): void {
      this.getProductList();
      this.getBrands();
      this.getTypes();
  }

  search(){
    this.selectedKeyword = this.searchTerm.nativeElement.value;
    this.getProductList()
  }
  onReset(){
    this.searchTerm.nativeElement.value = undefined;
    this.getProductList()
  }

  pageChanged(event:any){
    this.pageNumber= event.page
    this.getProductList()
  }

  getProductList(){
    this.shopService.getProducts(this.selectedBrand,this.selectedType,this.selectedKeyword).subscribe(
      res => {
        console.log(res)
          this.products = res.data.content
          this.pageNumber = res.data.pageable.pageNumber
          this.pageSize = res.data.pageable.pageSize
          this.totalCount = res.data.pageable.totalElements
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

  selectedBrands(brandId?:number){
    this.selectedBrand = brandId;
    this.getProductList()
  }

  selectedTypes(typeId?:number){
    this.selectedType = typeId;
    this.getProductList();
  }

  

  
}
