import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpmPage1Component } from './cpm-page1.component';

describe('CpmPage1Component', () => {
  let component: CpmPage1Component;
  let fixture: ComponentFixture<CpmPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpmPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpmPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
