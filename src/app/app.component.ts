import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-http';
  arrayDates: any = [];

  constructor(private router: Router) { }


  toGetOnclick() {
    this.router.navigate(['/onClick']);
  }

  toGetOnInit() {
    this.router.navigate(['/onInit']);
  }

  toHome() {
    this.router.navigate(['/']);
  }

  toLogin() {
    this.router.navigate(['/login']);
  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDo-JU7iEw2rhIcuJWn5wx2x7ahGF7-Ylo",
  authDomain: "app-angular-login.firebaseapp.com",
    });
  }
}
