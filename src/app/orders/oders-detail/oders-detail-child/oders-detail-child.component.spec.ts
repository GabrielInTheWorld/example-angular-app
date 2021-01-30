import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdersDetailChildComponent } from './oders-detail-child.component';

describe('OdersDetailChildComponent', () => {
  let component: OdersDetailChildComponent;
  let fixture: ComponentFixture<OdersDetailChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdersDetailChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdersDetailChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
