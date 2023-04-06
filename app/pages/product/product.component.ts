import { Component, OnInit } from '@angular/core';
import { ProductResponse } from 'src/app/shared/interfaces/product';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(
    private categoryService:CategoryService,
    private productService:ProductService
  ) { }
  ngOnInit(): void {
    this.getAll()
    this.active()
  }
  public categoryName=this.categoryService.categoryName;
  public productStorage!:ProductResponse[];
  public category!:number;
  activate(info:any){
    this.category=info.target.id
  }
  active(){
    this.categoryName=this.categoryService.categoryName
    setInterval(()=>{
      this.categoryName=this.categoryService.categoryName
    },1000)
  }
  getAll(){
    this.productService.getAll().subscribe(info=>{
      this.productStorage=info;
    })
  }
}
