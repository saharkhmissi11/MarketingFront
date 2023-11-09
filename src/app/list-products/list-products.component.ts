import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product';
import { ProductServiceService } from '../services/ProductService/product-service.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: ProductModel[]=[] ;
  constructor(private productService :ProductServiceService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts (){
    this.productService.getAllProduct().subscribe(
      (result) => {
        this.products = result;
        console.log(this.products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );

  }

}
