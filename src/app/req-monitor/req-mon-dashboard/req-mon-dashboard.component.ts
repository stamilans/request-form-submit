import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ReqMonDashboardConfig } from './req-mon-dashboard.config';

export interface RequestMonitorInfo {
  requestId: string,
  status:string,
  name: string,
  creditLink: string,
  acf2id: string,
  role: string,
  bmabm: string,
  transitNumber: string,
  region: string,
  volume: string,
  customerContact: string,
  commentsSubmission: string,
  lcdCompleted: string,
  requestTopic: string,
  notes: string,
}


const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];


@Component({
  selector: 'app-req-mon-dashboard',
  templateUrl: './req-mon-dashboard.component.html',
  styleUrls: ['./req-mon-dashboard.component.css']
})
export class ReqMonDashboardComponent implements OnInit,AfterViewInit{
  displayedColumns: string[] = ['requestId', 'name', 'role', 'region', 'transitNumber', 'requestTopic', 'lcdCompleted','status'];
  dataSource: MatTableDataSource<RequestMonitorInfo>;
  status:string;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public config: ReqMonDashboardConfig,  private route: ActivatedRoute) {
    // Create 100 users
   
    // Assign the data to the data source for the table to render
    
  }

  ngOnInit() {
    let status = this.route.snapshot.paramMap.get('status');
    if(status){
      this.status=status;
    }
    let size =Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    const users = Array.from({ length: size }, (_, k) => this.createNewUser(k + 1,status));

    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  createNewUser(id: number,status:any): RequestMonitorInfo {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';
    return {
      requestId: "CPM-" + Math.round(Math.random() * 100000).toString() + id.toString(),
      status:status,
      name: name,
      creditLink: "",
      acf2id: Math.round(Math.random() * 10).toString(),
      role: this.config.roleList[Math.round(Math.random() * (this.config.roleList.length - 1))].label,
      bmabm: "",
      transitNumber: "45780" + Math.round(Math.random() * 9),
      region: this.config.regionList[Math.round(Math.random() * (this.config.regionList.length - 1))].label,
      volume: "",
      customerContact: "",
      commentsSubmission: this.config.lcdCompletedList[Math.round(Math.random() * (this.config.lcdCompletedList.length - 1))].label,
      lcdCompleted: this.config.lcdCompletedList[Math.round(Math.random() * (this.config.lcdCompletedList.length - 1))].label,
      requestTopic: this.config.requestTopicList[Math.round(Math.random() * (this.config.requestTopicList.length - 1))].label,
      notes: "",
    };

  }
}
