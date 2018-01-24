import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilContainerComponent } from './profil-container.component';

describe('ProfilContainerComponent', () => {
  let component: ProfilContainerComponent;
  let fixture: ComponentFixture<ProfilContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
