import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-terminal-command',
  templateUrl: './terminal-command.component.html',
  styleUrls: ['./terminal-command.component.scss']
})
export class TerminalCommandComponent implements OnInit {
  @Input() myCommand: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
