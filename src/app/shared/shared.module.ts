import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { StoreModule } from '@ngrx/store'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { LikeIconComponent } from './components/like-icon/like-icon.component'
import { ProductCardComponent } from './components/product-card/product-card.component'
import { ProductDetailComponent } from './pages/product-detail/product-detail.component'
import { ProductListComponent } from './pages/product-list/product-list.component'
import { NumberAsEuroPipe } from './pipes/number-as-euro.pipe'

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
    StoreModule.forRoot({}, {}),
  ],
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    NumberAsEuroPipe,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    LikeIconComponent,
  ],
  exports: [
    ProductListComponent,
    ProductCardComponent,
    NumberAsEuroPipe,
    HeaderComponent,
    FooterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
