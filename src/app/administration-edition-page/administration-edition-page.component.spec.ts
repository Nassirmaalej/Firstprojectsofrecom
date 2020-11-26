import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationEditionPageComponent } from './administration-edition-page.component';

describe('AdministrationEditionPageComponent', () => {
  let component: AdministrationEditionPageComponent;
  let fixture: ComponentFixture<AdministrationEditionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationEditionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationEditionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
