import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { Observable, filter, map, switchMap } from 'rxjs'
import { selectProductsById } from 'src/app/state/selectors/products.selectors'
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
      switchMap((id) => this.store.select(selectProductsById(id))),
      filter((product): product is IProduct => product !== undefined)
    )
  }
}
