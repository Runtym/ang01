import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList:User[] = [];
  allChcked:boolean = false;
  list:Number[] = [];
  constructor(private http:HttpClient,private route:Router) { var header:HttpHeaders= new HttpHeaders({
    'X-AUTH-ID':localStorage.getItem('id'),
    'X-AUTH-TOKEN':localStorage.getItem('token')
  });
    this.http.get<User[]>('http://localhost:8080/api/users',{headers:header}).subscribe(
      data=>{
        console.log(data);
        this.userList = data;
    })
  }

  ngOnInit() {
  }

}
