import { Component, OnInit } from '@angular/core';
import { DiscountRequest, DiscountResponse } from '../shared/interfaces/discount';
import { deleteObject, getDownloadURL, percentage, ref, Storage, uploadBytesResumable } from '@angular/fire/storage'
import { DiscountService } from '../shared/services/discount/discount.service';
import { ICategoryResponse } from '../shared/interfaces/category';
import { CategoryService } from '../shared/services/category/category.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public discountCheck = false;
  public categoryCheck = false;
  public orderCheck = false;
  public goodsCheck = false;
  constructor(
  ) { }
  falseCheck() {
    this.discountCheck = false;
    this.categoryCheck = false;
    this.orderCheck = false;
    this.goodsCheck = false;
  }
  discount() {
    this.falseCheck();
    this.discountCheck = true;
  }
  category() {
    this.falseCheck();
    this.categoryCheck = true;
  }
  goods() {
    this.falseCheck();
    this.goodsCheck = true;
  }
  order() {
    this.falseCheck();
    this.orderCheck = true;
  }
  ngOnInit(): void {
  }
}
