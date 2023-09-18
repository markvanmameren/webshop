import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { ShopRootComponent } from './shop-root.component'

import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { SharedModule } from './shared/shared.module'
import { productsFeatureKey } from './state/actions/product.actions'
import { ProductEffects } from './state/effects/product.effects'
import { IAppState } from './state/interfaces/app-state.interface'
import { IProductFeature } from './state/interfaces/product-feature.interface'
import { createAppReducerMap } from './state/reducers/app.reducer-map'
import { productReducer } from './state/reducers/product.reducer'

@NgModule({
  declarations: [ShopRootComponent],
  imports: [
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot<IAppState>(createAppReducerMap()),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({ name: 'Shop', maxAge: 50 }),
    StoreModule.forFeature<IProductFeature>(productsFeatureKey, productReducer),
    EffectsModule.forFeature([ProductEffects]),
  ],
  bootstrap: [ShopRootComponent],
})
export class AppModule {}
