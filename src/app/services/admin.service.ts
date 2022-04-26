import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(environment.apiBaseUrl+'/admin/getUsers');
  }

  getAllProducts() {
    return this.http.get(environment.apiBaseUrl+'/admin/getProducts');
  }

  deleteUser(username) {
    return this.http.delete(environment.apiBaseUrl+`/admin/deleteUser/${username}`);
  }

  deleteProduct(id) {
    return this.http.delete(environment.apiBaseUrl+`/admin/deleteProduct/${id}`);
  }

}
