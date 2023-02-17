import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReqMonDashboardComponent } from './req-mon-dashboard/req-mon-dashboard.component';
import { ReqMonitorHomeComponent } from './req-monitor-home/req-monitor-home.component';

const reqMonRoutes: Routes = [
  { path: 'reqmon/dsb/:status',  component: ReqMonDashboardComponent},
  { path: 'reqmon',  component: ReqMonitorHomeComponent}]

@NgModule({
  imports: [RouterModule.forChild(reqMonRoutes)],
  exports: [RouterModule]
})
export class ReqMonitorRoutingModule { }
