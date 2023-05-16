import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetOnClickComponent } from './get-on-click/get-on-click.component';
import { OnInitComponent } from './on-init/on-init.component';

const routes: Routes = [
  { path: "onClick", component: GetOnClickComponent },
  { path: 'onInit', component: OnInitComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
