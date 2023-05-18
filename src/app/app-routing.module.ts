import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetOnClickComponent } from './get-on-click/get-on-click.component';
import { OnInitComponent } from './on-init/on-init.component';
import { LoginComponent } from './login/login.component';
import { HomeTextComponent } from './home-text/home-text.component';
import { LoginGuardian } from './login/login-guardian.service';

const routes: Routes = [
  { path: "onClick",  component: GetOnClickComponent ,canActivate: [LoginGuardian],},
  { path: 'onInit',  component: OnInitComponent,canActivate: [LoginGuardian], },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeTextComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
