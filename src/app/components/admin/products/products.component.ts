import { Product } from 'src/app/models/product.model';
import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productItem!: Product;

  productsList;
  name: string;
  description: string;
  imageUrl: string;
  price: number;

  serverErrorMessages = [];

  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminService.getAllProducts().subscribe(
      res => {
        this.productsList = res['product'];
      },
      err => {}
    )
  }

  deleteProduct(id) {
    this.adminService.deleteProduct(id).subscribe(
      res => {
        console.log(id)
        this.router.navigateByUrl('/admin');
      },
      err => {
        console.log(err)
      }
    )
  }

}
