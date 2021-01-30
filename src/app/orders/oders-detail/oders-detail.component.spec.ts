import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdersDetailComponent } from './oders-detail.component';

describe('OdersDetailComponent', () => {
  let component: OdersDetailComponent;
  let fixture: ComponentFixture<OdersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdersDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
