import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-boardlist',
  templateUrl: './boardlist.component.html',
  styleUrls: ['./boardlist.component.css']
})
export class BoardlistComponent implements OnInit {
  boardList:Board[] = [];
  allChcked:boolean = false;
  list:Number[] = [];
  constructor(private http:HttpClient,private route:Router,private cs:CommonService) { 
    cs.get('api/angboard',{}).subscribe(
      data=>{
        console.log(data);
        this.boardList = data;
    });
  }

  ngOnInit() {
  }
  search(){
    var titleObj:HTMLInputElement = <HTMLInputElement>document.getElementById('title');
    var contentObj:HTMLInputElement = <HTMLInputElement>document.getElementById('content');
    var writerObj:HTMLInputElement = <HTMLInputElement>document.getElementById('writer');
    var param:HttpParams = new HttpParams().set('title',titleObj.value).set('content',contentObj.value).set('writer',writerObj.value);
    this.cs.get('api/angboard',param).subscribe(
      data=>{
        this.boardList = data;
    });
  }
  goPage(){
    this.route.navigate(['boardwrite']);
  }

  doDelete(){
    var checks = <NodeListOf<HTMLInputElement>>document.querySelectorAll('[name=numCheck]:checked');
    var param = '';
    checks.forEach(obj=>{
      this.list.push(parseInt(obj.value));
    }) 
    this.cs.delete('api/angboards',{nums:this.list}).subscribe(
      data=>{
        alert('삭제완료');
        this.search();
    });
  }
}
