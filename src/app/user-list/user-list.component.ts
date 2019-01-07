import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:User[] = [];
  allChcked:boolean = false;
  list:Number[] = [];
  constructor(private cs:CommonService,private route:Router) {
    cs.get('api/users',{}).subscribe(
      data=>{
        console.log(data);
        this.userList = data;
    })
  }

  ngOnInit() {
  }

}
