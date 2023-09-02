import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ProductService } from 'src/app/shared/services/product.service'
import { IProduct } from '../../interfaces/product.interface'

@Component({
  selector: 'shop-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public products$: Observable<IProduct[]>

  public constructor(private readonly productService: ProductService) {}

  public ngOnInit(): void {
    this.products$ = this.productService.getProducts()
  }
}
