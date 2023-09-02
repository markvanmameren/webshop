import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons'
import {
  faHeart as faHeartFilled,
  faMoneyCheckDollar,
} from '@fortawesome/free-solid-svg-icons'
import { Observable, filter, map, switchMap } from 'rxjs'
import { IProduct } from '../../interfaces/product.interface'
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'shop-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public product$: Observable<IProduct>

  public constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly productService: ProductService
  ) {}

  // icons
  public faHeartEmpty = faHeartEmpty
  public faHeartFilled = faHeartFilled
  public faMoneyCheckDollar = faMoneyCheckDollar

  public ngOnInit(): void {
    this.product$ = this.activatedRoute.paramMap.pipe(
      filter((params) => params.has('id')),
      map((params) => params.get('id') as string),
      switchMap((id) => this.productService.getProductById(id))
    )
  }
}
