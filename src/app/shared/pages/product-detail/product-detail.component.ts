import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable, combineLatestWith, filter, map } from 'rxjs'
import { getProductsAction } from 'src/app/state/actions/products.actions'
import { selectAllProducts } from 'src/app/state/selectors/products.selectors'
import { IProduct } from '../../interfaces/product.interface'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'shop-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public product$: Observable<IProduct>

  public constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly store: Store,
    private readonly productsService: ProductsService
  ) {}

  public ngOnInit(): void {
    this.product$ = this.activatedRoute.paramMap.pipe(
      map((params) => params.get('id')),
      filter((id): id is string => id !== null),
      combineLatestWith(this.store.select(selectAllProducts)),
      map(([id, products]) => {
        const matchedProduct = products.find((product) => product.id === id)
        return matchedProduct !== undefined
          ? matchedProduct
          : this.store.dispatch(getProductsAction())
      }),
      filter((product): product is IProduct => product !== undefined)
    )
  }
}
