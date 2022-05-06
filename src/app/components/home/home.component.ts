import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router:Router,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
  }

  getAbout(){
    //işlemler
    this.router.navigate(['about']);
  }


  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }
}

