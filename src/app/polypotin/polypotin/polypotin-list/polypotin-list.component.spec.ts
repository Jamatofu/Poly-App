import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolypotinListComponent } from './polypotin-list.component';

describe('PolypotinListComponent', () => {
  let component: PolypotinListComponent;
  let fixture: ComponentFixture<PolypotinListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolypotinListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolypotinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
