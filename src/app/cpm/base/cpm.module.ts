import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CpmRoutingModule } from './cpm-routing.module';
import { CpmConfirmationComponent } from '../pages/cpm-confirmation/cpm-confirmation.component';
import { CpmPage1Component } from '../pages/cpm-page1/cpm-page1.component';
import { CpmPage2Component } from '../pages/cpm-page2/cpm-page2.component';
import { CpmReviewComponent } from '../pages/cpm-review/cpm-review.component';
import { CpmConfig } from '../pages/cpm-page1/cpm-page1.config';
import { CpmService } from '../services/cpm.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CpmRoutingModule
  ],
  declarations: [
    CpmPage1Component,
    CpmPage2Component,
    CpmReviewComponent,
    CpmConfirmationComponent
  ],
  providers:[CpmConfig,CpmService]
})

export class CpmModule {}
