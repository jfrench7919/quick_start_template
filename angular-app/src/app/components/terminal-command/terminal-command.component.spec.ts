import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalCommandComponent } from './terminal-command.component';

describe('TerminalCommandComponent', () => {
  let component: TerminalCommandComponent;
  let fixture: ComponentFixture<TerminalCommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalCommandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
