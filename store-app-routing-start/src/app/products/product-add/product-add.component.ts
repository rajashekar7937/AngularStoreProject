import { Component, OnInit } from '@angular/core';
import { Product } from 'app/models/product';
import { ProductsService } from 'app/services/products.service';
import { LoggingService } from 'app/services/logging.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
Formproduct: Product = new Product;
  constructor(
    private productsService: ProductsService,
    private loggingService: LoggingService,
    private route: ActivatedRoute,
    private routes:Router
  ) { }

  ngOnInit() {
    this.productsService.getProducts();
  }
  onSave() {
    this.loggingService.logMessage('Product Form - Save button clicked.');
    this.productsService.addProduct(this.Formproduct);
    this.routes.navigate(['/products']);
  }
}
