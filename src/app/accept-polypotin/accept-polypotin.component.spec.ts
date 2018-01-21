import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptPolypotinComponent } from './accept-polypotin.component';

describe('AcceptPolypotinComponent', () => {
  let component: AcceptPolypotinComponent;
  let fixture: ComponentFixture<AcceptPolypotinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptPolypotinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptPolypotinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
