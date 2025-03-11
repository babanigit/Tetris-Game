// product.component.ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../state/product.model';
import { ProductQuery } from '../../state/product.query';
import { ProductService } from '../../state/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  products$: Observable<Product[]> | undefined;

  constructor(
    private productQuery: ProductQuery,
    private productService: ProductService
  ) {}

  ngOnInit() {
    // Initialize the store with some data if needed
    // this.productService.initializeStore();

    // Get products from the query
    this.products$ = this.productQuery.getAllProducts();
  }

  addProduct() {
    const newProduct: Product = {
      id: Date.now(),
      name: 'New Product',
      price: 150
    };
    this.productService.addProduct(newProduct);
  }

  removeProduct(id: number) {
    this.productService.removeProduct(id);
  }
}
