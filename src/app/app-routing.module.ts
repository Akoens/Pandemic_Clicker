import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component'
import { AuthGuard } from './guard/auth.guard';
import { UserModule } from './user/user.module'

const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'details', component: DetailsComponent, canActivate: [AuthGuard]},

  {path: '**', 
  component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    UserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
