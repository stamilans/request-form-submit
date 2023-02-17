import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReqMonitorRoutingModule } from './req-monitor-routing.module';
import { ReqMonDashboardComponent } from './req-mon-dashboard/req-mon-dashboard.component';
import { MatTableModule } from '@angular/material/table' 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReqMonDashboardConfig } from './req-mon-dashboard/req-mon-dashboard.config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReqMonitorHomeComponent } from './req-monitor-home/req-monitor-home.component'; 
@NgModule({
  declarations: [
    ReqMonDashboardComponent,
    ReqMonitorHomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReqMonitorRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers:[ReqMonDashboardConfig]
})
export class ReqMonitorModule { }
