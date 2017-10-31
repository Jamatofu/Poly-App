import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefiBlockComponent } from './defi-block.component';

describe('DefiBlockComponent', () => {
  let component: DefiBlockComponent;
  let fixture: ComponentFixture<DefiBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefiBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefiBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
