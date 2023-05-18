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
      apiKey: "AIzaSyBt5ek7Y8BCZy1nL-q5Ka1P6ZEzwATofos",
      authDomain: "personas-angular.firebaseapp.com"
    });
  }
}
