import { environment } from './../../environments/environment';
import { Product } from './../models/product';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${environment.baseUrl}/products`);
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(
      `${environment.baseUrl}/products/${id}`
    );
  }
}
