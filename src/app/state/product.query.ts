// product.query.ts
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ProductStore, ProductState } from './product.store';

@Injectable({ providedIn: 'root' })
export class ProductQuery extends QueryEntity<ProductState> {
  // Don't initialize here - move to constructor or a method

  constructor(protected override store: ProductStore) {
    super(store);
  }

  // Create a method to get all products
  getAllProducts() {
    return this.selectAll();
  }
}
