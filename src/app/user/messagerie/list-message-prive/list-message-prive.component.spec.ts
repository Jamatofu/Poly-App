import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMessagePriveComponent } from './list-message-prive.component';

describe('ListMessagePriveComponent', () => {
  let component: ListMessagePriveComponent;
  let fixture: ComponentFixture<ListMessagePriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMessagePriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMessagePriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
