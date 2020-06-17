import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppNavComponent } from './app-nav/app-nav.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { DeleteWarningComponent } from './dialog/delete-warning/delete-warning.component';

const components = [
  AppNavComponent,
  FooterComponent
]

@NgModule({
  declarations: [components, DeleteWarningComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [components]
})
export class WebLayoutModule { }
