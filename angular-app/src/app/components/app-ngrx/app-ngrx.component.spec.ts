import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNgrxComponent } from './app-ngrx.component';

describe('AppNgrxComponent', () => {
  let component: AppNgrxComponent;
  let fixture: ComponentFixture<AppNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNgrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
