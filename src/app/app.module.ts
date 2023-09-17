import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { ShopRootComponent } from './shop-root.component'

import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { SharedModule } from './shared/shared.module'
import { productsFeatureKey } from './state/actions/products.actions'
import { ProductsEffects } from './state/effects/products.effects'
import { IAppState } from './state/interfaces/app-state.interface'
import { IProductsFeature } from './state/interfaces/products-feature.interface'
import { appReducerMap } from './state/reducers/app.reducer-map.'
import { productsReducer } from './state/reducers/products.reducer'

@NgModule({
  declarations: [ShopRootComponent],
  imports: [
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot<IAppState>(appReducerMap),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({ name: 'Shop', maxAge: 50 }),
    StoreModule.forFeature<IProductsFeature>(
      productsFeatureKey,
      productsReducer
    ),
    EffectsModule.forFeature([ProductsEffects]),
  ],
  bootstrap: [ShopRootComponent],
})
export class AppModule {}
