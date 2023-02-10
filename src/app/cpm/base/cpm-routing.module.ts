import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CpmPage1Component } from '../pages/cpm-page1/cpm-page1.component';
import { CpmReviewComponent } from '../pages/cpm-review/cpm-review.component';
import { CpmConfirmationComponent } from '../pages/cpm-confirmation/cpm-confirmation.component';
import { CpmPage2Component } from '../pages/cpm-page2/cpm-page2.component';

const cpmRoutes: Routes = [
  { path: 'cpm-page1',  component: CpmPage1Component},
  { path: 'cpm-page2',  component: CpmPage2Component},
  { path: 'cpm-review',  component: CpmReviewComponent},
  { path: 'cpm-confirmation',  component: CpmConfirmationComponent},
  { path: 'home', redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [
    RouterModule.forChild(cpmRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CpmRoutingModule { }
