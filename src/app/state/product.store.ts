// product.store.ts (correct the filename)
import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Product } from './product.model';

export interface ProductState extends EntityState<Product, number> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'products' })
export class ProductStore extends EntityStore<ProductState> {
  constructor() {
    super({});  // Initialize with empty object
  }
}
