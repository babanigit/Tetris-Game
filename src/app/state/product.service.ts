// product.service.ts
import { Injectable } from '@angular/core';
import { ProductStore } from './product.store';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private productStore: ProductStore) {}

  // // Initialize some products (optional)
  // initializeStore() {
  //   const initialProducts = [
  //     { id: 1, name: 'Product 1', price: 100 },
  //     { id: 2, name: 'Product 2', price: 200 }
  //   ];
  //   this.productStore.set(initialProducts);
  // }

  addProduct(product: Product) {
    this.productStore.add(product);
  }

  removeProduct(id: number) {
    this.productStore.remove(id);
  }
}
