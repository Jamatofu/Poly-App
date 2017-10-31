import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDefiComponent } from './add-defi.component';

describe('AddDefiComponent', () => {
  let component: AddDefiComponent;
  let fixture: ComponentFixture<AddDefiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDefiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDefiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
