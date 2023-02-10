import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpmReviewComponent } from './cpm-review.component';

describe('CpmReviewComponent', () => {
  let component: CpmReviewComponent;
  let fixture: ComponentFixture<CpmReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpmReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpmReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
