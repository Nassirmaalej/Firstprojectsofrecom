import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrangeBrandedComponent } from './dashboard-orange-branded.component';

describe('DashboardOrangeBrandedComponent', () => {
  let component: DashboardOrangeBrandedComponent;
  let fixture: ComponentFixture<DashboardOrangeBrandedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardOrangeBrandedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOrangeBrandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
