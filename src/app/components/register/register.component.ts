import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showSuccessMessage: boolean;
  serverErrorMessages = [];

  constructor(
    public userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  register(form: NgForm) {
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 4000);
        this.router.navigateByUrl('/login');
      },
      err => {
        if(err.status === 409) {
          this.serverErrorMessages = err.error.message;
          setTimeout(() => this.serverErrorMessages =  [], 4000);
        }
      }
    )
  }

}
