import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-boardwrite',
  templateUrl: './boardwrite.component.html',
  styleUrls: ['./boardwrite.component.css']
})
export class BoardwriteComponent implements OnInit {
  board:Board = {title:'',content:'',writer:1}
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  boardWrite(){
    this.http.post<any>('http://localhost:8080/api/angboard',this.board).subscribe(
      data=>{
        alert(data.msg);
      },
      error=>{
        console.log(error);
        alert(error);
      }
    )
  }
}
