import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
  loggedIn = false;
  login(user: User): boolean {

    if (user.userName == "taner" && user.password == "12345") {
      this.loggedIn=true;
      localStorage.setItem("isLogged","true");
      return true;
      
    }

    return false;
  }

  isLoggedIn(){
    return this.loggedIn;
  }

  logout(){
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
  }

}
