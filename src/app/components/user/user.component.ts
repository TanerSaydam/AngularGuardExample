import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users:{id:number, name:string,lastName:string}[] = [];

  constructor(
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.users = this.userService.users
  }

}
