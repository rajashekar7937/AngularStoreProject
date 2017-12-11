import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { LoggingService } from '../../services/logging.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product;
  id: number;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private loggingService: LoggingService,
    private router:Router
  ) {}

  ngOnInit() {
    //getting parameters from url
    console.log(this.route);
    this.route.params.subscribe((params)=>{
      this.id = +params.id;
      this.product = this.productsService.getProduct(this.id);
    });
  }

  onEdit() {
    this.loggingService.logMessage('Product Detail - Edit button clicked.');
    this.router.navigate(['/products',this.id,'edit']); 
  }

  onDelete() {
    this.loggingService.logMessage('Product Detail - Delete button clicked.');
    this.productsService.deleteProduct(this.id);
    this.router.navigate(['/products']);
  }
}
