import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { IProduct } from 'src/app/shared/interfaces/product.interface'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly baseUrl =
    'https://64f326d5edfa0459f6c65914.mockapi.io/products'

  public constructor(private readonly httpClient: HttpClient) {}

  public getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${this.baseUrl}`)
  }

  public getProductById(id: string): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${this.baseUrl}/${id}`)
  }
}
