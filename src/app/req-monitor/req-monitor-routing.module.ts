import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReqMonDashboardComponent } from './req-mon-dashboard/req-mon-dashboard.component';

const reqMonRoutes: Routes = [
  { path: 'reqmon-dsb',  component: ReqMonDashboardComponent}]

@NgModule({
  imports: [RouterModule.forChild(reqMonRoutes)],
  exports: [RouterModule]
})
export class ReqMonitorRoutingModule { }
