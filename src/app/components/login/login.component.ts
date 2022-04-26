import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = {
    email: '',
    password: ''
  }
  serverErrorMessages = [];

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(this.userService.isLoggedIn()) {
      this.router.navigateByUrl('/shop');
    }
  }

  login(form: NgForm) {
    let user = {
      username: form.value.email,
      password: form.value.password
    };
    if(user.username.indexOf('admin') > -1){
      this.userService.loginAdmin(form.value).subscribe(
        res => {
          this.userService.setToken(res['token']);
          this.userService.setUser(user);
          this.router.navigateByUrl('/admin');
          console.log('Admin login successfully')
        },
        err => {
          this.serverErrorMessages = err.error.message;
          setTimeout(() => this.serverErrorMessages =  [], 4000);
        }
      )
    } else {
      this.userService.loginUser(form.value).subscribe(
        res => {
          this.userService.setToken(res['token']);
          this.userService.setUser(user);
          this.router.navigateByUrl('/shop');
        },
        err => {
          this.serverErrorMessages = err.error.message;
          setTimeout(() => this.serverErrorMessages =  [], 4000);
        }
      )
    }
  }



}
