import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { MaterialModule } from './material/material.module';
import { LayoutModule } from '@angular/cdk/layout';

// Service Workers
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

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

// Services
import { AuthService } from './shared/auth.service';
import { DataService } from './shared/data.service';
import { NotFoundComponent } from './not-found/not-found.component'
import { TokenInterceptorService } from './shared/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DetailsComponent,
    AppNavComponent,
    SignupComponent,
    FooterComponent,
    NotFoundComponent
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
  providers: [DataService, AuthService,
    {provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptorService, 
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
