import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRegistrationFormComponent } from './card-registration-form.component';

describe('CardRegistrationFormComponent', () => {
  let component: CardRegistrationFormComponent;
  let fixture: ComponentFixture<CardRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRegistrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
