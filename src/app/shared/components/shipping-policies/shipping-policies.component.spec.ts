import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingPoliciesComponent } from './shipping-policies.component';

describe('ShippingPoliciesComponent', () => {
  let component: ShippingPoliciesComponent;
  let fixture: ComponentFixture<ShippingPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingPoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
