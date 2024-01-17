import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderItemsService {
  constructor(private http: HttpClient, private router: Router) {}

  url = `${environment.apiUrl}/order-items/`;

  getOrderItems() {
    return this.http.get(`${this.url}`);
  }

  getOrderItem() {
    return this.http.get(`${this.url}/:id`);
  }

  setOrderItems() {
    return this.http.post(`${this.url}/create-order-items`, {});
  }

  updateOrderItems() {}

  deleteOrderItems() {}
}
