import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { GameComponent } from './game.component';
import { AuthGuard } from '../guard/auth.guard';


const components = [GameComponent]

const routes = [
  {path: 'game', component: GameComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
  ],
  exports: [components, RouterModule]
})
export class GameModule { }
