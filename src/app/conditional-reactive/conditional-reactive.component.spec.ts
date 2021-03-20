import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalReactiveComponent } from './conditional-reactive.component';

describe('ConditionalReactiveComponent', () => {
  let component: ConditionalReactiveComponent;
  let fixture: ComponentFixture<ConditionalReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
