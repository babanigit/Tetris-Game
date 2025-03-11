// product.service.ts
import { Injectable } from '@angular/core';
import { ProductStore } from './product.store';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private productStore: ProductStore) {}

  addProduct(product: Product) {
    this.productStore.add(product);  // Use 'add' instead of update
  }

  removeProduct(id: number) {
    this.productStore.remove(id);
  }
}
