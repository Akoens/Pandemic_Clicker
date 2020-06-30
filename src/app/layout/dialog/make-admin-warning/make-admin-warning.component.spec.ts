import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAdminWarningComponent } from './make-admin-warning.component';

describe('MakeAdminWarningComponent', () => {
  let component: MakeAdminWarningComponent;
  let fixture: ComponentFixture<MakeAdminWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeAdminWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeAdminWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
