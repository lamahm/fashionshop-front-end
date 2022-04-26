import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './../models/product.model';
import { CartItem } from '../models/cart-item.model';
import { cartUrl } from '../config/api-env';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  token: string;
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) }
  userId;

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(environment.apiBaseUrl+'/cartList').pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];
        
        for(let item of result) {
          let checkItemExist = false;
          for (let i in cartItems) {
            if (cartItems[i].productId === item.product._id) {
              cartItems[i].quantity++;
              checkItemExist = true;
              break;
            }
          }
  
          if (!checkItemExist) {
            cartItems.push(new CartItem());
          }
        }

        return cartItems;
      })
    );
  }

  getCartItem(id: string): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(environment.apiBaseUrl+`/cartListId/${id}`).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];

        for(let item of result) {
          let checkItemExist = false;
          for (let i in cartItems) {
            if (cartItems[i].productId === item.product._id) {
              cartItems[i].quantity++;
              checkItemExist = true;
              break;
            }
          }
  
          if (!checkItemExist) {
            cartItems.push(new CartItem());
          }
        }

        return cartItems;
      })
    );
  }

  addToCart(product: object): Observable<CartItem> {
    return this.http.post<CartItem>(environment.apiBaseUrl+'/addCart', product)
  }
  
  onLoadToken() {
    this.token = localStorage.getItem('token');
  }
}
