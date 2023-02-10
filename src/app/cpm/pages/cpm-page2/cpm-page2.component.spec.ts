import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpmPage2Component } from './cpm-page2.component';

describe('CpmPage2Component', () => {
  let component: CpmPage2Component;
  let fixture: ComponentFixture<CpmPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpmPage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpmPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
