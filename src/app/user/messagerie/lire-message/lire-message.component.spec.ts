import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LireMessageComponent } from './lire-message.component';

describe('LireMessageComponent', () => {
  let component: LireMessageComponent;
  let fixture: ComponentFixture<LireMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LireMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LireMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
