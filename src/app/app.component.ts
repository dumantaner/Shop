import { Component } from '@angular/core';
import { AccountService } from './services/account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  constructor(private accountservice:AccountService){

  }
  title = 'shop';
isLoggedin(){
  return this.accountservice.isLoggedIn();
}

logOut(){
  
  return this.accountservice.logout();
  
  
}

}



