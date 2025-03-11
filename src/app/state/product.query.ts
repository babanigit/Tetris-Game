// product.query.ts
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ProductStore, ProductState } from './product.store';

@Injectable({ providedIn: 'root' })
export class ProductQuery extends QueryEntity<ProductState> {  // Use QueryEntity
  products$ = this.selectAll();  // Select all entities

  constructor(protected override store: ProductStore) {
    super(store);
  }
}
