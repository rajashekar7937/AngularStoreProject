import { Component, OnInit } from '@angular/core';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { LoggingService } from '../../services/logging.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product = new Product;
  id: number;

  constructor(
    private productsService: ProductsService,
    private loggingService: LoggingService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit() {
    //getting parameters from url
    this.route.params.subscribe((params)=>{
      this.id = +params.id;
      this.product = this.productsService.getProduct(this.id);
    });
  }

  onSave() {
    this.loggingService.logMessage('Product Form - Save button clicked.');
    this.productsService.updateProduct(this.id,this.product);
    this.router.navigate(['/products',this.id]);
  }
}
