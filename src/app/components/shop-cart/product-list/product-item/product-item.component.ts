import { UserService } from './../../../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product.model';
import { MessangerService } from 'src/app/services/messanger.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!: Product; 

  name: string;
  price: number;
  description: string;
  imageUrl: string;
  productId: string;

  constructor(
    private msg: MessangerService,
    private cartService: CartService,
    public userService: UserService
    ) { }

  ngOnInit(): void {
  }

  handleAddToCart(name: string, price: number, productId: string) {
    this.name = name;
    this.price = price;
    this.productId = productId;

    let productItem = {
      name: this.name,
      description: this.description,
      price: this.price,
      imageUrl: this.imageUrl,
      productId: this.productId
    }

    this.cartService.addToCart(productItem).subscribe(() => {
      this.msg.sendMsg(productItem);
    });
  }

} 
