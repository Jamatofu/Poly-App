import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrireMessageComponent } from './ecrire-message.component';

describe('EcrireMessageComponent', () => {
  let component: EcrireMessageComponent;
  let fixture: ComponentFixture<EcrireMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcrireMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcrireMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
