import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { ShopModule } from './app/shop.module'

platformBrowserDynamic()
  .bootstrapModule(ShopModule)
  .catch((err) => console.error(err))
