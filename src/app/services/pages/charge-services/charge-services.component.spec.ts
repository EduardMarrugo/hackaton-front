import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeServicesComponent } from './charge-services.component';

describe('ChargeServicesComponent', () => {
  let component: ChargeServicesComponent;
  let fixture: ComponentFixture<ChargeServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChargeServicesComponent]
    });
    fixture = TestBed.createComponent(ChargeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
