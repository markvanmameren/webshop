import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { getMockProduct } from 'src/app/testing/mocks/product.mock'
import { getMockProducts } from 'src/app/testing/mocks/products.mock'
import { ProductService } from './product.service'

describe('ProductService', () => {
  let service: ProductService

  let httpTestingController: HttpTestingController
  let mockHttpRequest: TestRequest

  const baseUrl = 'https://64f326d5edfa0459f6c65915.mockapi.io/products'

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })

    service = TestBed.inject(ProductService)
    httpTestingController = TestBed.inject(HttpTestingController)
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  describe('getProducts', () => {
    it('should send a get request to the correct url, and receive all products', (done) => {
      const mockProducts = getMockProducts()

      service.getProducts().subscribe((products) => {
        expect(products).toBe(mockProducts)
        done()
      })

      mockHttpRequest = httpTestingController.expectOne({
        url: baseUrl,
        method: 'GET',
      })
      mockHttpRequest.flush(mockProducts)
    })
  })

  describe('updateProduct', () => {
    it('should send a put request to the correct url, with the correct body, and receive updated product', (done) => {
      const mockProductId = '77'
      const sentProduct = { ...getMockProduct(), id: mockProductId }
      const receivedProduct = { ...sentProduct }

      service.updateProduct(sentProduct).subscribe((receivedProduct) => {
        expect(receivedProduct).toEqual(sentProduct)
        done()
      })

      mockHttpRequest = httpTestingController.expectOne({
        url: `${baseUrl}/${sentProduct.id}`,
        method: 'PUT',
      })
      mockHttpRequest.flush(receivedProduct)
    })
  })
})
