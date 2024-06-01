import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule
  ]
})
export class SharedModule { }
