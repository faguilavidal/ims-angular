import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-dashboard',
  templateUrl: './table-dashboard.component.html',
  styleUrls: ['./table-dashboard.component.css']
})
export class TableDashboardComponent implements OnInit {

  today:Date = new Date();
  id1:number = Math.round(Math.random()*9999999999);
  id2:number = Math.round(Math.random()*9999999999);
  id3:number = Math.round(Math.random()*9999999999);
  id4:number = Math.round(Math.random()*9999999999);
  id5:number = Math.round(Math.random()*9999999999);

  constructor() { }

  ngOnInit() {
  }

}
