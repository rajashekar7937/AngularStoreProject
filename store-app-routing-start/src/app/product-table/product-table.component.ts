import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {
  products:Product[]=[];

  constructor(private productService:ProductsService) { }

  ngOnInit() {
    this.products=this.productService.getProducts();
  }

}
