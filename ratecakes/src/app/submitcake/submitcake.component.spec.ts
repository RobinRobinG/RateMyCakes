import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitcakeComponent } from './submitcake.component';

describe('SubmitcakeComponent', () => {
  let component: SubmitcakeComponent;
  let fixture: ComponentFixture<SubmitcakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitcakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitcakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
