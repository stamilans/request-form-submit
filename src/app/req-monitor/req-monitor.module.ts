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
@NgModule({
  declarations: [
    ReqMonDashboardComponent,
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
