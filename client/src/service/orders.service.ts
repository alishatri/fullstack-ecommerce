import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient, private router: Router) {}

  getOrders() {}

  getOrder() {}

  setOrder() {}

  updateOrder() {}

  deleteOrder() {}
}
