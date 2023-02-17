import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqMonitorHomeComponent } from './req-monitor-home.component';

describe('ReqMonitorHomeComponent', () => {
  let component: ReqMonitorHomeComponent;
  let fixture: ComponentFixture<ReqMonitorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqMonitorHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReqMonitorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
