import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "Baschou";
  password = "jesuistresaffame";
  message = false;


  constructor(private router:Router, private ps: ProduitsService) { }

  ngOnInit(): void {
  }
  
  login(login1: any) {
    if (login1.value.username == this.username && login1.value.password == this.password) {
      this.ps.isconnected = true
      this.router.navigate(["product"])
    }
    else {
      this.message=true
    }
  }
}
