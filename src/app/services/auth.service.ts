import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAut:boolean = false;

  constructor() { }

  isAuthenticated(){
    if (this.isAut) {
      return true;
    }else{
      return false;
    }
  }

  login(){
    this.isAut = true;
    alert("Giriş başarılı");
  }

  logout(){
    this.isAut = false;
    alert("Çıkış başarılı");
  }
}
