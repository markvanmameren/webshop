import { ActionReducerMap } from '@ngrx/store'
import { productsFeatureKey } from '../actions/product.actions'
import { IAppState } from '../interfaces/app-state.interface'
import { createAppReducerMap } from './app.reducer-map'
import { productReducer } from './product.reducer'

describe('appReducerMap', () => {
  it('should create an ActionReducerMap of the state', () => {
    const expected: ActionReducerMap<IAppState> = {
      [productsFeatureKey]: productReducer,
    }
    const actual = createAppReducerMap()

    expect(actual).toEqual(expected)
  })
})
