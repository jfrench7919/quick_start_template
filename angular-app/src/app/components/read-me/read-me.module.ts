import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadMeComponent } from './read-me.component';
import { TerminalCommandModule } from './terminal-command/terminal-command.module';



@NgModule({
  declarations: [
    ReadMeComponent
  ],
  imports: [
    CommonModule,
    TerminalCommandModule
  ],
  exports: [
    ReadMeComponent
  ]
})
export class ReadMeModule { }
