import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "Baschou";
  password = "jesuistresaffame";
  message = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  login(login1: any) {
    if (login1.value.username == this.username && login1.value.password == this.password) {
      this.router.navigate(["product"])
    }
    else {
      this.message=true
    }
  }
}
