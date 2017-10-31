import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDefiComponent } from './list-defi.component';

describe('ListDefiComponent', () => {
  let component: ListDefiComponent;
  let fixture: ComponentFixture<ListDefiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDefiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDefiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
