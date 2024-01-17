import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient, private router: Router) {}

  getProducts() {
    return this.http.get(`${environment.apiUrl}/product`);
  }
  getProduct(id: number) {
    return this.http.get(`${environment.apiUrl}/product/:${id}`);
  }
  setProduct(name: string, price: number, imageUrl: any) {
    return this.http.post(`${environment.apiUrl}/product/add-product`, {
      name,
      price,
      imageUrl,
    });
  }

  deleteProduct() {
    return this.http.delete(`${environment.apiUrl}/product/delete-product`);
  }
}
