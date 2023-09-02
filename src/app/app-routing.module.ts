import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductListComponent } from './shared/pages/product-list/product-list.component'

const routes: Routes = [
  { path: 'products', component: ProductListComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
