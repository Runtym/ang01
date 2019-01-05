import { Component, OnInit } from '@angular/core';
import { Board } from '../board';
import { HttpClient } from '@angular/common/http';
import { UploadService } from '../upload/upload.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../upload/dialog/dialog.component';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-boardwrite',
  templateUrl: './boardwrite.component.html',
  styleUrls: ['./boardwrite.component.css']
})
export class BoardwriteComponent implements OnInit {
  board:Board = {title:'',content:'',writer:1}
  constructor(private cs: CommonService,private http:HttpClient) { }

  ngOnInit() {
  }
  boardWrite(){
    this.cs.post<any>('api/angboard',this.board).subscribe(
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
