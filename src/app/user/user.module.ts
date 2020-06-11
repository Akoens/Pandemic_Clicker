import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { LayoutModule } from '@angular/cdk/layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component';
import { SettingComponent } from './setting/setting.component';


const components = [
  LoginComponent,
  SignupComponent,
  SettingComponent
]
const routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'settings', component: SettingComponent},
]

@NgModule({
  declarations: [components],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule
  ],
  exports:[components, RouterModule]
})
export class UserModule { }
