import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { mockCpmRequestInfo } from '../../mock/mock-cpm-request';
import { CpmRequestInfo } from '../../models/CpmRequestInfo';
import { CpmService } from '../../services/cpm.service';
import { CpmConfig } from '../cpm-page1/cpm-page1.config';

@Component({
  selector: 'app-cpm-review',
  templateUrl: './cpm-review.component.html',
  styleUrls: ['./cpm-review.component.css']
})
export class CpmReviewComponent {
  cpmRequestInfo: CpmRequestInfo;

  constructor(
    private router:Router,
    public cpmConfig:CpmConfig,
    public cpmService:CpmService
  ) {

  }

  ngOnInit(): void {
    //this.cpmRequestInfo = this.cpmService.getCpmRequestInfo();
    this.cpmRequestInfo = mockCpmRequestInfo;
  }
  submit(){
    this.router.navigate(['cpm-confirmation']);
  }

  back(){
    this.router.navigate(["cpm-page1"])
  }

  print(){
    window.print();
  }
}
