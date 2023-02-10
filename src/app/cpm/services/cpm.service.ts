import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { mockCpmRequestInfoEmpty } from '../mock/mock-cpm-request';
import { CpmRequestInfo } from '../models/CpmRequestInfo';


@Injectable()
export class CpmService {

  private cpmRequestInfo:CpmRequestInfo;

  constructor() { }

  setCpmRequestInfo(cpmRequestInfo:CpmRequestInfo){
    this.cpmRequestInfo=cpmRequestInfo;
  }

  getCpmRequestInfo(){
    if(this.cpmRequestInfo){
      return this.cpmRequestInfo;
    }
    this.cpmRequestInfo=mockCpmRequestInfoEmpty;
    return this.cpmRequestInfo;
  }

}

