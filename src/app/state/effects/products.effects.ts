import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects'
import { Store } from '@ngrx/store'
import { catchError, filter, map, mergeMap, of, tap } from 'rxjs'
import { IProduct } from 'src/app/shared/interfaces/product.interface'
import { ProductsService } from 'src/app/shared/services/products.service'
import {
  getAllProductsFailureAction,
  getAllProductsInitiateAction,
  getAllProductsSuccessAction,
  togglelikeProductFailureAction,
  togglelikeProductInitiateAction,
  togglelikeProductSuccessAction,
} from '../actions/products.actions'
import { selectProductsById } from '../selectors/products.selectors'

@Injectable()
export class ProductsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly productsService: ProductsService
  ) {}

  public getAllProductsEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getAllProductsInitiateAction),
      mergeMap(() =>
        this.productsService.getProducts().pipe(
          map((products) => getAllProductsSuccessAction({ products })),
          catchError((error: HttpErrorResponse) =>
            of(getAllProductsFailureAction({ error: error.message }))
          )
        )
      )
    )
  })

  public toggleLikeProductEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(togglelikeProductInitiateAction),
      concatLatestFrom(({ id }) => this.store.select(selectProductsById(id))),
      tap((product) => {
        if (product === undefined) throw new Error('product with id not found')
      }),
      map(([_id, product]) => product),
      filter((product): product is IProduct => product !== undefined),
      map((product) => ({ ...product, liked: !product.liked } as IProduct)),
      mergeMap((product) =>
        this.productsService.updateProduct(product).pipe(
          map((updatedProduct) =>
            togglelikeProductSuccessAction({ updatedProduct })
          ),
          catchError((error: HttpErrorResponse) =>
            of(togglelikeProductFailureAction({ error: error.message }))
          )
        )
      )
    )
  })
}
