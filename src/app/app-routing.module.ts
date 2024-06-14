import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash/dash.component';

const routes: Routes = [
  {
    component:HomeComponent,path:""
  },
  {
    component:DashComponent,path:"z"
  },
  {
    component:HomeComponent,path:"**"
  }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
