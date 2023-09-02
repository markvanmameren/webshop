import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ShopRoutingModule } from './shop-routing.module'
import { ShopRootComponent } from './shop-root.component'
import { StoreModule } from '@ngrx/store'

@NgModule({
  declarations: [ShopRootComponent],
  imports: [BrowserModule, ShopRoutingModule, StoreModule.forRoot({}, {})],
  providers: [],
  bootstrap: [ShopRootComponent],
})
export class ShopModule {}
