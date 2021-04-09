import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConditionalComponent } from './user-conditional.component';

describe('UserConditionalComponent', () => {
  let component: UserConditionalComponent;
  let fixture: ComponentFixture<UserConditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserConditionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
