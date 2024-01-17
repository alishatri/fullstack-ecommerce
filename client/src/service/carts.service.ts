import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  constructor(private http: HttpClient, private router: Router) {}

  getCarts() {
    return this.http.get(`${environment.apiUrl}/cart`);
  }
  getCart(id: number) {
    return this.http.get(`${environment.apiUrl}/cart/:${id}`);
  }
  setCart() {
    return this.http.post(`${environment.apiUrl}/cart/add-cart`, {});
  }

  deleteCart() {
    return this.http.delete(`${environment.apiUrl}/cart/delete-cart`);
  }
}
