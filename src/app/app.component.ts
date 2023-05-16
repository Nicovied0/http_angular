import { Component } from '@angular/core';
import { Router } from '@angular/router'; // impoertar router para navegar entre rutas

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-http';
  arrayDates: any = []



  constructor(private router: Router) { }
  toGetOnclick() {
    this.router.navigate(['/onClick'])
  }
  toGetOnInit() {
    this.router.navigate(['/onInit'])
  }
  toHome() {
    this.router.navigate(['/'])
  }
}
