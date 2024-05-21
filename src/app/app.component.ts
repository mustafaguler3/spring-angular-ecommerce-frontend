import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './shared/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  products!: Product[];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
      this.http.get("http://localhost:8081/api/products").subscribe(
        (response:any) => {
          this.products = response
        },
        error => {
          console.log(error)
        }
      )
      
  }


}
