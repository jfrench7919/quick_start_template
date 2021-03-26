import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalCommandComponent } from './terminal-command.component';



@NgModule({
  declarations: [
    TerminalCommandComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TerminalCommandComponent
  ]
})
export class TerminalCommandModule { }
