import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsSubmissionComponent } from './payments-submission.component';

describe('PaymentsSubmissionComponent', () => {
  let component: PaymentsSubmissionComponent;
  let fixture: ComponentFixture<PaymentsSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsSubmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
