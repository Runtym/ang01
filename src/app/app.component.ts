import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  constructor(private route:Router){

  }
  localStorageItem(): boolean {
    if (localStorage.getItem("token")) {
      return true
    } else {
      return false;
    };
  }
  getName():String{
    if(!localStorage.getItem('name')){
      return '로그인을 해주세요.';
    }
    return localStorage.getItem('name') + '님 안녕하세요';
  }
  goPage(url:string){
    this.route.navigate(['/'+url]);
  }
  doLogout(){
    localStorage.clear();
    this.goPage('login');
  }
}
