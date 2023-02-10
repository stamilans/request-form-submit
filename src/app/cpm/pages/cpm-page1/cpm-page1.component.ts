import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { mockCpmRequestInfo, mockCpmRequestInfoEmpty } from '../../mock/mock-cpm-request';
import { CpmRequestInfo } from '../../models/CpmRequestInfo';
import { CpmService } from '../../services/cpm.service';
import { CpmConfig } from './cpm-page1.config';

@Component({
  selector: 'app-cpm-page1',
  templateUrl: './cpm-page1.component.html',
  styleUrls: ['./cpm-page1.component.css']
})
export class CpmPage1Component {

  cpmRequestInfo: CpmRequestInfo;
  public cpmForm: FormGroup;


  constructor(
    public form: FormBuilder,
    private router:Router,
    public cpmConfig:CpmConfig,
    public cpmService:CpmService
  ) {

  }

  ngOnInit(): void {
    this.cpmRequestInfo = this.cpmService.getCpmRequestInfo();
    this.buildForm();
  }

  public buildForm() {
    this.cpmForm = new FormGroup({
      creditLink: new FormControl(this.cpmRequestInfo.creditLink, [Validators.required]),
      acf2id: new FormControl(this.cpmRequestInfo.acf2id, [Validators.required]),
      role: new FormControl(this.cpmRequestInfo.role, [Validators.required]),
      bmabm: new FormControl(this.cpmRequestInfo.bmabm, [Validators.required]),
      transitNumber: new FormControl(this.cpmRequestInfo.transitNumber, [Validators.required]),
      region: new FormControl(this.cpmRequestInfo.region, [Validators.required]),
      volume: new FormControl(this.cpmRequestInfo.volume, [Validators.required]),
      customerContact: new FormControl(this.cpmRequestInfo.customerContact, [Validators.required]),
      commentsSubmission: new FormControl(this.cpmRequestInfo.commentsSubmission, [Validators.required]),
      lcdCompleted: new FormControl(this.cpmRequestInfo.lcdCompleted, [Validators.required]),
      requestTopic: new FormControl(this.cpmRequestInfo.requestTopic, [Validators.required]),
      notes: new FormControl(this.cpmRequestInfo.notes, [Validators.required])
    });

    // on each value change we call the validateForm function
    // We only validate form controls that are dirty, meaning they are touched
    // the result is passed to the formErrors object
    this.cpmForm.valueChanges.subscribe((data) => {
      //this.formErrors = this.FormService.validateForm(this.cpmForm, this.formErrors, true)
    });
  }

  get creditLink() { return this.cpmForm.get('creditLink')!; }
  get acf2id() { return this.cpmForm.get('acf2id')!; }
  get role() { return this.cpmForm.get('role')!; }
  get bmabm() { return this.cpmForm.get('bmabm')!; }
  get transitNumber() { return this.cpmForm.get('transitNumber')!; }
  get region() { return this.cpmForm.get('region')!; }
  get volume() { return this.cpmForm.get('volume')!; }
  get customerContact() { return this.cpmForm.get('customerContact')!; }
  get commentsSubmission() { return this.cpmForm.get('commentsSubmission')!; }
  get lcdCompleted() { return this.cpmForm.get('lcdCompleted')!; }
  get requestTopic() { return this.cpmForm.get('requestTopic')!; }
  get notes() { return this.cpmForm.get('notes')!; }

  review(){
    this.cpmRequestInfo=this.cpmForm.value;
    this.cpmService.setCpmRequestInfo(this.cpmRequestInfo);
    this.router.navigate(['/cpm-review'])
  }

}
