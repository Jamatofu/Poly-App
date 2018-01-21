import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPolypotinComponent } from './add-polypotin.component';

describe('AddPolypotinComponent', () => {
  let component: AddPolypotinComponent;
  let fixture: ComponentFixture<AddPolypotinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPolypotinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPolypotinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
