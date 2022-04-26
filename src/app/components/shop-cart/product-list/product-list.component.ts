import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  ListOfProduct;

  constructor(
    private productService: ProductService,
    ) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(
      res => {
        this.ListOfProduct = res['product'];
      },
      err => {}
    )
  }
 
}
