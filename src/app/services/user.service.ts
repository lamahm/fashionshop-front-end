import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User = {
    username: '',
    email: '',
    password: '',
    usertype: '',
    _id: ''
  }

  token: string;

  user: any;

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) }

  constructor(private http: HttpClient) { }

  postUser(user: User): Observable<any> {
    return this.http.post(environment.apiBaseUrl+'/register', user, this.noAuthHeader);
  }
  
  loginUser(authCredentials) {
    return this.http.post(environment.apiBaseUrl+'/authenticate', authCredentials, this.noAuthHeader)
  } 

  loginAdmin(authCredentials) {
    return this.http.post(environment.apiBaseUrl+'/authenticateAdmin', authCredentials, this.noAuthHeader)
  } 

  getUserProfile() {
    return this.http.get(environment.apiBaseUrl+'/userProfile');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setUser(user: object) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if(token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if(userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false
  }

}
