import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = {id:'',pwd:''};
  constructor(private http:HttpClient,private route:Router) { 

  } 
  ngOnInit() {
  }

  doLogin(){
    this.http.post<User>('http://localhost:8080/api/login',this.user).subscribe(
      data=>{
        if(data!=null){
          alert('로그인 되었습니다.');
          localStorage.setItem('id',data.id);
          localStorage.setItem('token',data.token);
          this.route.navigate(['boardlist']);
          this.user = data;
        }
        console.log(data);
      }
    )
  }
  alertId(){
    alert(localStorage.getItem('id'));
    alert(localStorage.getItem('token'));
  }
}
