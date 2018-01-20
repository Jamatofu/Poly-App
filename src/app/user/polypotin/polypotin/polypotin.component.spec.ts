import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolypotinComponent } from './polypotin.component';

describe('PolypotinComponent', () => {
  let component: PolypotinComponent;
  let fixture: ComponentFixture<PolypotinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolypotinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolypotinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
