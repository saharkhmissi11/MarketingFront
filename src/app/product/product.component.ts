import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {


  @Input()
  product: ProductModel= {} ;

  constructor() {}


}
