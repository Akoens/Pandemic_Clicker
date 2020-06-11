import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Service Workers
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

// Components
import { AppComponent } from './app.component'; // Root Component

// Web layout components 
import { WebLayoutModule } from './layout/web-layout.module';

// Webpage components
import { HomeComponent } from './home/home.component';

// Services
import { NotFoundComponent } from './not-found/not-found.component'
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    MaterialModule,
    LayoutModule,
    WebLayoutModule,
    UserModule,
    
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
