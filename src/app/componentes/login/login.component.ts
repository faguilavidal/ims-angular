import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;

  @ViewChild('f', {static: false}) f: NgForm;

  constructor(
              private flashMessage:FlashMessagesService,
              private router:Router
  ) { }

  ngOnInit() {
  }

  login(){
    if (this.email != "admin@admin.cl") {
      this.flashMessage.show('Usuario o contraseña incorrectos!!', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
      return false;
    } else {
      this.router.navigate(['/']);
      return true;
    }
  }
}
