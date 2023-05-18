import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
@Component({
  selector: 'app-home-text',
  templateUrl: './home-text.component.html',
  styleUrls: ['./home-text.component.css']
})
export class HomeTextComponent {
  constructor(private loginService: LoginService) { }

  public logeado = true
  public dato: any

  ngOnInit() {
    this.dato = this.loginService.isAuthenticated()
    if (this.dato) {
      this.logeado = true
    } else {
      this.logeado = false
    }
  }



}
