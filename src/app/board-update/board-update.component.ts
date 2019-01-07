import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Board } from '../board';

@Component({
  selector: 'app-board-update',
  templateUrl: './board-update.component.html',
  styleUrls: ['./board-update.component.css']
})
export class BoardUpdateComponent implements OnInit {
  num:number;
  board:Board={title:'',content:'',writer:0};
  constructor(private cs:CommonService, private route:ActivatedRoute,private router:Router) {

  }

  ngOnInit() {
    this.route.params.subscribe(param=>{
      this.num = param.num;
      console.log(this.num);
    })
    this.cs.get('api/angboard/'+this.num,{}).subscribe(
      data=>{
        this.board = data;
        console.log(this.board);
    })
  }

  boardUpdate(){
    this.cs.put('api/angboard',this.board).subscribe(
      data=>{
        if(data==1){
          alert('수정 완료');
        }
    })
  }
}
