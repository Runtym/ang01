import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Board } from '../board';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-boardview',
  templateUrl: './boardview.component.html',
  styleUrls: ['./boardview.component.css']
})
export class BoardviewComponent implements OnInit {
  num:number = 2;
  board:Board={title:'',content:'',writer:0};
  constructor(private cs:CommonService, private route:ActivatedRoute,private router:Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(param=>{
      this.num = param.num;
    })
    this.cs.get('api/angboard/'+this.num,{}).subscribe(
      data=>{
        this.board = data;
        console.log(this.board);
    })
  }

  goModify(){
    this.router.navigate(['boardupdate/'+this.board.num]);
  }
}
