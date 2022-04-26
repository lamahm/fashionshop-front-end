import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/basics/header/header.component';
import { FooterComponent } from './components/basics/footer/footer.component';
import { NavComponent } from './components/basics/nav/nav.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { ProductListComponent } from './components/shop-cart/product-list/product-list.component';
import { CartComponent } from './components/shop-cart/cart/cart.component';
import { CartItemComponent } from './components/shop-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shop-cart/product-list/product-item/product-item.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/basics/not-found/not-found.component';

import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';

import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { UsersComponent } from './components/admin/users/users.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShopCartComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    UserProfileComponent,
    AdminComponent,
    ProductsComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
    }, 
    AuthGuard ,
    UserService, 
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
