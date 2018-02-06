import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLandingComponent } from './edit-landing.component';

describe('EditLandingComponent', () => {
  let component: EditLandingComponent;
  let fixture: ComponentFixture<EditLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
