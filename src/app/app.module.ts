import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { ShopRootComponent } from './shop-root.component'

import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [ShopRootComponent],
  imports: [SharedModule, AppRoutingModule],
  bootstrap: [ShopRootComponent],
})
export class AppModule {}
