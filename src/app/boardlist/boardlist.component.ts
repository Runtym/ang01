import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boardlist',
  templateUrl: './boardlist.component.html',
  styleUrls: ['./boardlist.component.css']
})
export class BoardlistComponent implements OnInit {
  boardList:Board[] = [];
  constructor(private http:HttpClient,private route:Router) { 
    this.http.get<Board[]>('http://localhost:/api/angboard').subscribe(
      data=>{
        this.boardList = data;
    })
  }

  ngOnInit() {
  }
  search(){
    var titleObj:HTMLInputElement = <HTMLInputElement>document.getElementById('title');
    var contentObj:HTMLInputElement = <HTMLInputElement>document.getElementById('content');
    var writerObj:HTMLInputElement = <HTMLInputElement>document.getElementById('writer');
    var param:HttpParams = new HttpParams().set('title',titleObj.value).set('content',contentObj.value).set('writer',writerObj.value);
    this.http.get<Board[]>('http://localhost:8080/api/angboard',{params:param}).subscribe(
      data=>{
        this.boardList = data;
    })
  }
  goPage(){
    this.route.navigate(['boardwrite']);
  }
}