import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddOrderComponent } from './components/orders/add-order/add-order.component';
import { UpdateOrderComponent } from './components/orders/update-order/update-order.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { AddOrderItemsComponent } from './components/order-items/add-order-items/add-order-items.component';
import { UpdateOrderItemsComponent } from './components/order-items/update-order-items/update-order-items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from './components/panel/panel.component';
import { AdminComponent } from './components/panel/admin/admin.component';
import { ClientComponent } from './components/panel/client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    ProductsComponent,
    EditProductComponent,
    AddProductComponent,
    OrdersComponent,
    AddOrderComponent,
    UpdateOrderComponent,
    OrderItemsComponent,
    AddOrderItemsComponent,
    UpdateOrderItemsComponent,
    HomeComponent,
    PanelComponent,
    AdminComponent,
    ClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
