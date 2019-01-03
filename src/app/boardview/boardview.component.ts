import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Board } from '../board';

@Component({
  selector: 'app-boardview',
  templateUrl: './boardview.component.html',
  styleUrls: ['./boardview.component.css']
})
export class BoardviewComponent implements OnInit {
  num:number = 2;
  board:Board;
  constructor(private http:HttpClient, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param=>{
      this.num = param.num;
    })
    this.http.get<Board>('http://localhost:8080/api/angboard/'+this.num).subscribe(
      data=>{
        this.board = data;
    })
  }

}
