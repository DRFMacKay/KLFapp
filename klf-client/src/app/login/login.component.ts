import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { }
  private currentUser: any;
  ngOnInit(): void {
  }

  loginUser(event: any){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.Auth.getUserDetails(username, password).subscribe(data => {
      this.currentUser = data;
      window.alert('successfully logged in as ' + this.currentUser.name)
    },
    error => window.alert("Invalid login credentials")
    )
    
  }

}
