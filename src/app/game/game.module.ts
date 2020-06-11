import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { MaterialModule } from '../material/material.module';

import { GameComponent } from './game.component';


const components = [GameComponent]

const routes = [
  {path: 'game', component: GameComponent}
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
