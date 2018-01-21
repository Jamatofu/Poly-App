import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolypotinGlobalComponent } from './polypotin-global.component';

describe('PolypotinGlobalComponent', () => {
  let component: PolypotinGlobalComponent;
  let fixture: ComponentFixture<PolypotinGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolypotinGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolypotinGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
