import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { IProduct } from 'src/app/shared/interfaces/product.interface'

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public constructor(private readonly httpClient: HttpClient) {}

  private readonly baseUrl =
    'https://64f326d5edfa0459f6c65915.mockapi.io/products'

  public getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${this.baseUrl}`)
  }

  public getProductById(id: string): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${this.baseUrl}/${id}`)
  }
}
