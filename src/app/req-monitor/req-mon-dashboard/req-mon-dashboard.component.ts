import { Component } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ReqMonDashboardConfig } from './req-mon-dashboard.config';

export interface RequestMonitorInfo {
    requestId:string,
    name:string,
     creditLink: string,
     acf2id: string,
     role:string,
     bmabm:string,
     transitNumber:string,
     region:string,
     volume:string,
     customerContact:string,
     commentsSubmission:string,
     lcdCompleted:string,
     requestTopic:string,
     notes:string,
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
export class ReqMonDashboardComponent {
  displayedColumns: string[] = ['requestId', 'name','role','region','transitNumber','requestTopic','lcdCompleted'];
  dataSource: MatTableDataSource<RequestMonitorInfo>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public config:ReqMonDashboardConfig) {
    // Create 100 users
    const users = Array.from({length: 74}, (_, k) => this.createNewUser(k + 1));

    // Assign the data to the data source for the table to render
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
  createNewUser(id: number): RequestMonitorInfo {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';
    return {
       requestId:"CPM-"+Math.round(Math.random() * 100000).toString()+id.toString(),
       name:name,
       creditLink:"" ,
       acf2id: Math.round(Math.random() * 10).toString(),
       role:this.config.roleList[Math.round(Math.random() * (this.config.roleList.length - 1))].label,
       bmabm:"",
       transitNumber:"45780"+Math.round(Math.random() * 9),
       region:this.config.regionList[Math.round(Math.random() * (this.config.regionList.length - 1))].label,
       volume:"",
       customerContact:"",
       commentsSubmission:this.config.lcdCompletedList[Math.round(Math.random() * (this.config.lcdCompletedList.length - 1))].label,
       lcdCompleted:this.config.lcdCompletedList[Math.round(Math.random() * (this.config.lcdCompletedList.length - 1))].label,
       requestTopic:this.config.requestTopicList[Math.round(Math.random() * (this.config.requestTopicList.length - 1))].label,
       notes:"",
    };
  
  }
}
