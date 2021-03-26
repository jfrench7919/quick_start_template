import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMongoComponent } from './app-mongo.component';

describe('AppMongoComponent', () => {
  let component: AppMongoComponent;
  let fixture: ComponentFixture<AppMongoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMongoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
