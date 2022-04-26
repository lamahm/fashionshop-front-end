import { User } from './../../../models/user.model';
import { Component, Input, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userItem!: User; 

  usersList;
  username: string;
  email: string;
  usertype: string;

  serverErrorMessages = [];

  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminService.getAllUsers().subscribe(
      res => {
        this.usersList = res['user'];
      },
      err => {}
    )
  }

  deleteUser(username) {
    this.adminService.deleteUser(username).subscribe(
      res => {
        this.router.navigateByUrl('/admin');
        console.log('delete user successfully');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    )
  }

}
