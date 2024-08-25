import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsagePoliciesComponent } from './usage-policies.component';

describe('UsagePoliciesComponent', () => {
  let component: UsagePoliciesComponent;
  let fixture: ComponentFixture<UsagePoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsagePoliciesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsagePoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
