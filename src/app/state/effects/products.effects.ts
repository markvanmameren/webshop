import { HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, of } from 'rxjs'
import { ProductsService } from 'src/app/shared/services/products.service'
import {
  getProductsAction,
  getProductsFailureAction,
  getProductsSuccessAction,
} from '../actions/products.actions'

@Injectable()
export class ProductsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly productsService: ProductsService
  ) {}

  public getProductsEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProductsAction),
      mergeMap(() =>
        this.productsService.getProducts().pipe(
          map((products) => getProductsSuccessAction({ products })),
          catchError((error: HttpErrorResponse) =>
            of(getProductsFailureAction({ error: error.message }))
          )
        )
      )
    )
  })
}
