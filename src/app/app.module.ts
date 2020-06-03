import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http'
import { DataService } from './shared/data.service'

import { MaterialModule } from './material/material.module';
import { LayoutModule } from '@angular/cdk/layout';

import { environment } from '../environments/environment';

// Components
import { AppComponent } from './app.component'; // Root Component

// Web layout components 
import { AppNavComponent } from './app-nav/app-nav.component';
import { FooterComponent } from './footer/footer.component'

// Webpage components
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DetailsComponent,
    AppNavComponent,
    SignupComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    MaterialModule,
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
