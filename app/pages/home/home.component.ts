import { Component, OnInit } from '@angular/core';
import { ProductResponse } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private productService:ProductService
  ) { }
  ngOnInit(): void {
    this.getAll();
  }
  public productStorage!:ProductResponse[];
  public category!:number;
  activate(info:any){
    this.category=info.target.id
  }
  getAll(){
    this.productService.getAll().subscribe(info=>{
      this.productStorage=info;
    })
  }
  slider(info:any){
    console.log(info)
  }

}
