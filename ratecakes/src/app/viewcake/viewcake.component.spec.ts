import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcakeComponent } from './viewcake.component';

describe('ViewcakeComponent', () => {
  let component: ViewcakeComponent;
  let fixture: ComponentFixture<ViewcakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
