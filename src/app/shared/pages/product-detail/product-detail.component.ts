import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Store } from '@ngrx/store'
import { Observable, filter, map, switchMap } from 'rxjs'
import {
  getAllProductsInitiateAction,
  togglelikeProductInitiateAction,
} from 'src/app/state/actions/product.actions'
import {
  selectProductsById,
  selectProductsError,
  selectProductsLoading,
} from 'src/app/state/selectors/product.selectors'
import { IProduct } from '../../interfaces/product.interface'

@Component({
  selector: 'shop-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public isLoading$ = this.store.select(selectProductsLoading)
  public errorMessage$ = this.store.select(selectProductsError)
  public product$: Observable<IProduct | undefined>

  // icons
  public faArrowLeft = faArrowLeft

  public constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly store: Store
  ) {}

  public ngOnInit(): void {
    this.store.dispatch(getAllProductsInitiateAction())

    this.product$ = this.activatedRoute.paramMap.pipe(
      map((params) => params.get('id')),
      filter((id): id is string => id !== null),
      switchMap((id) => this.store.select(selectProductsById(id)))
    )
  }

  public handleLikeClicked(id: string): void {
    this.store.dispatch(togglelikeProductInitiateAction({ id }))
  }
}
