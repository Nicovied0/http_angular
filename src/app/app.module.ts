import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GetOnClickComponent } from './get-on-click/get-on-click.component';
import { OnInitComponent } from './on-init/on-init.component';
import { CardsGHComponent } from './cards-gh/cards-gh.component';
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { HomeTextComponent } from './home-text/home-text.component';

@NgModule({
  declarations: [
    AppComponent,
    GetOnClickComponent,
    OnInitComponent,
    CardsGHComponent,
    LoginComponent,
    HomeTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
