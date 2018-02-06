import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProjComponent } from './upload-proj.component';

describe('UploadProjComponent', () => {
  let component: UploadProjComponent;
  let fixture: ComponentFixture<UploadProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
