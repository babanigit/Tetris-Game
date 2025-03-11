// product.components.ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../state/product.model';
import { ProductQuery } from '../../state/product.query';
import { ProductService } from '../../state/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products$: Observable<Product[]> | undefined;

  constructor(private productQuery: ProductQuery, private productService: ProductService) {}

  ngOnInit() {
    this.products$ = this.productQuery.products$;
  }

  addProduct() {
    const newProduct: Product = {
      id: Math.random(),
      name: 'New Product',
      price: 100
    };
    this.productService.addProduct(newProduct);
  }

  removeProduct(id: number) {
    this.productService.removeProduct(id);
  }
}
