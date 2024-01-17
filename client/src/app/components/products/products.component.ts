import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  products: any;

  ngOnInit(): void {
      this.getProducts();
  }

  public getProducts() {
    this.productsService.getProducts().subscribe(
      (data) => {
        console.log(data);

        this.products = data;
        console.log(this.products);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
