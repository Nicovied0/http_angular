import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GetOnClickComponent } from './get-on-click/get-on-click.component';
import { OnInitComponent } from './on-init/on-init.component'

@NgModule({
  declarations: [
    AppComponent,
    GetOnClickComponent,
    OnInitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
