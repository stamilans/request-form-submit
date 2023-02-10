import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqMonDashboardComponent } from './req-mon-dashboard.component';

describe('ReqMonDashboardComponent', () => {
  let component: ReqMonDashboardComponent;
  let fixture: ComponentFixture<ReqMonDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqMonDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReqMonDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
