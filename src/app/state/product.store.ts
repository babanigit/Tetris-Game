// product.stores.ts
import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Product } from './product.model';

export interface ProductState extends EntityState<Product, number> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'products' })  // Ensure store name is set
export class ProductStore extends EntityStore<ProductState> {
  constructor() {
    super();  // Properly initializes the store
  }
}
