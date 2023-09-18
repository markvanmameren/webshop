import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ErrorMessageComponent } from './components/error-message/error-message.component'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { LikeIconComponent } from './components/like-icon/like-icon.component'
import { LoaderComponent } from './components/loader/loader.component'
import { ProductCardComponent } from './components/product-card/product-card.component'
import { WishlistComponent } from './components/wishlist/wishlist.component'
import { ProductDetailComponent } from './pages/product-detail/product-detail.component'
import { ProductListComponent } from './pages/product-list/product-list.component'
import { NumberAsEuroPipe } from './pipes/number-as-euro.pipe';
import { ImageWithLoaderComponent } from './components/image-with-loader/image-with-loader.component'

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    NumberAsEuroPipe,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    LikeIconComponent,
    ErrorMessageComponent,
    LoaderComponent,
    WishlistComponent,
    ImageWithLoaderComponent,
  ],
  exports: [
    ProductListComponent,
    ProductCardComponent,
    NumberAsEuroPipe,
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    WishlistComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
