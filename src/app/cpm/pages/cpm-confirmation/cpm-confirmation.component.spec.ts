import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpmConfirmationComponent } from './cpm-confirmation.component';

describe('CpmConfirmationComponent', () => {
  let component: CpmConfirmationComponent;
  let fixture: ComponentFixture<CpmConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpmConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpmConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
