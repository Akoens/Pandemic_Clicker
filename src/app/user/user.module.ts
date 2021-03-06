import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { LayoutModule } from '@angular/cdk/layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { AuthGuard } from '../guard/auth.guard';

import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component';
import { SettingComponent } from './setting/setting.component';
import { DetailsComponent } from './details/details.component';
import { AuthService } from '../shared/auth.service';
import { TokenInterceptorService } from '../shared/token-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from '../guard/admin.guard';
import { DeleteWarningComponent } from '../layout/dialog/delete-warning/delete-warning.component';
import { MakeAdminWarningComponent } from '../layout/dialog/make-admin-warning/make-admin-warning.component';


const components = [
  LoginComponent,
  SignupComponent,
  DetailsComponent,
  SettingComponent,
]
const routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard, AdminGuard]}, 
  {path: 'details', component: DetailsComponent, canActivate: [AuthGuard]},
  {path: 'settings', component: SettingComponent},
]

@NgModule({
  declarations: [components, AdminComponent, ],
  entryComponents: [DeleteWarningComponent, MakeAdminWarningComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    LayoutModule
  ],
  exports:[components, RouterModule],
  providers: [AuthService,
    {provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptorService, 
      multi:true
    }]
})
export class UserModule { }
