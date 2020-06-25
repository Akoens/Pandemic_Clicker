import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { UserModule } from './user/user.module'

const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: '**', 
  component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    UserModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
