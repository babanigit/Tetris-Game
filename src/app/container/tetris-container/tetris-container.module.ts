import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TetrisContainerComponent } from './tetris-container.component';



@NgModule({
  declarations: [
    TetrisContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TetrisContainerComponent
  ]
})
export class TetrisContainerModule { }
