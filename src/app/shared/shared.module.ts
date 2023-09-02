import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { StoreModule } from '@ngrx/store'
import { ProductCardComponent } from './components/product-card/product-card.component'
import { ProductListComponent } from './pages/product-list/product-list.component';
import { NumberAsEuroPipe } from './pipes/number-as-euro.pipe'

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    StoreModule.forRoot({}, {}),
  ],
  declarations: [ProductListComponent, ProductCardComponent, NumberAsEuroPipe],
  exports: [ProductListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
