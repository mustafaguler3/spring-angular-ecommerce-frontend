import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Product } from '../shared/models/product';
import { Pagination } from '../shared/models/pagination';
import { map, Observable } from 'rxjs';
import { ApiResponse } from '../shared/models/apiresponse';
import { Brand } from '../shared/models/brand';
import { Type } from '../shared/models/type';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  baseApi = "http://localhost:8081/api"

  constructor(private http:HttpClient) { }

  getProducts(keyword?:string,brandId?:number,typeId?:number){

    let params = new HttpParams();

    if(keyword != null){
      params = params.append("keyword",keyword);
    }
    
    if(brandId != null){
      params = params.append("brandId",brandId.toString())
    }

    if(typeId != null){
      params = params.append("typeId",typeId.toString())
    }

    return this.http.get<ApiResponse<Product>>(this.baseApi+"/products",{params})
  }

  getBrands(){
    return this.http.get<Brand[]>(this.baseApi+"/products/brands")
  }

  getTypes(){
    return this.http.get<Type[]>(this.baseApi+"/products/types")
  }

}
