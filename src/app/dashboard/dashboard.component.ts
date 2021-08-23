import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  enableEdit = false;
  enableEditIndex = null;

  constructor( private route:Router) {}

  ngOnInit(): void {

  }

  row = [
    {
      serialnumber: '1',
      email: 'sk@gmail.com',
      fullname: 'Sonali Karche'
    },
    {
      serialnumber: '2',
      email: 'kk@gmail.com',
      fullname: 'Kulbhushan Godase'
    },
    {
      serialnumber: '3',
      email: 'gg@gmail.com',
      fullname: 'Shiv Godase'
    }
  ];
  
  addTable() {
    const obj = {
      serialnumber: '4',
      email: 'gg@gmail.com',
      fullname: 'Swati Adhav'
    }
    this.row.push(obj)
  }

  deleteRow(x){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this.row.splice(x, 1 );
    }   
  } 

  enableEditMethod(e, i) {
    this.enableEdit = true;
    this.enableEditIndex = i;
    console.log(i, e);
  }

 
}


