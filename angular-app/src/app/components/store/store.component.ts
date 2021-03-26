import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { Product } from './models/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class MyStoreComponent implements OnInit, OnDestroy {

  componentDestroyed$ = new Subject<void>();
  products$: Observable<Product[]>;
  products: Product[] = [];
  constructor(private store: Store<AppState>) {
    this.products$ = this.store.select(state => state.product).pipe(takeUntil(this.componentDestroyed$));
  }

  ngOnInit() {
    this.products$.pipe(takeUntil(this.componentDestroyed$)).subscribe(p => { this.products = p; });
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
  }

  addProduct(name: any, price: any) {
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: <Product>{
        name: name,
        price: price
      }
    });
  }

}
