import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { getAllProductsInitiateAction } from 'src/app/state/actions/products.actions'
import {
  selectAllProducts,
  selectLoading,
  selectProductsError,
} from 'src/app/state/selectors/products.selectors'

@Component({
  selector: 'shop-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public isLoading$ = this.store.select(selectLoading)
  public products$ = this.store.select(selectAllProducts)
  public errorMessage$ = this.store.select(selectProductsError)

  public constructor(private readonly store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(getAllProductsInitiateAction())
  }
}
