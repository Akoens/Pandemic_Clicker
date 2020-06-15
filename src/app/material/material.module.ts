import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTabsModule
]

@NgModule({
  imports: [ material ],
  exports: [ material ]
})
export class MaterialModule { }
