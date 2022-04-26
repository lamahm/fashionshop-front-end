import { User } from './../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { Product } from 'src/app/models/product.model';
import { CartItem } from '../../../models/cart-item.model';
import { CartService } from 'src/app/services/cart.service';
import { MessangerService } from 'src/app/services/messanger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any = [];
  id: string;

  totalPrice = 0;
  cartItem: CartItem[];
  user;

  constructor(
    private msg: MessangerService,
    private router: Router,
    private cartService: CartService
    ) { }
 
  ngOnInit(): void {
    
    this.handleSubscription();
    this.fetchCartItems();
  }

  

  fetchCartItems() {
    this.cartService.getCartItem(this.cartService.userId).subscribe((data: CartItem[]) => {
      this.cartItem = data;
      this.TotalCalc();
    });
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.fetchCartItems();
    });
  }

  loadCart() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.TotalCalc();
    })
  }

  TotalCalc() {
    this.totalPrice = 0;
    this.cartItems.forEach(item => {
      this.totalPrice += (item.quantity * item.price);
    });
  }
}

