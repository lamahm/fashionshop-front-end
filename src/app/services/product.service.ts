import { Injectable } from '@angular/core';

import { Product } from 'src/app/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { productUrl } from 'src/app/config/api-env';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get(environment.apiBaseUrl+'/shop');
  }
  
}
