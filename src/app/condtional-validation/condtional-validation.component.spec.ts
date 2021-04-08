import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondtionalValidationComponent } from './condtional-validation.component';

describe('CondtionalValidationComponent', () => {
  let component: CondtionalValidationComponent;
  let fixture: ComponentFixture<CondtionalValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondtionalValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondtionalValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
