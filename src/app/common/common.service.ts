import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  url:string = 'http://localhost:8080/';
  header:HttpHeaders = new HttpHeaders();
  constructor(private http:HttpClient) { }

  getHeader(conType?:string):HttpHeaders{
    if(!conType){
      conType='application/x-www-form-urlencoded/html; charset=utf-8';
    }
    return new HttpHeaders({
      'X-AUTH-ID':localStorage.getItem('id'),
      'X-AUTH-TOKEN':localStorage.getItem('token'),
      'Content-type':conType
    });
  }
  get(url:string,param:any){
    url = this.url + url;
    return this.http.get<any>(url,{headers:this.getHeader(),params:param});
  }
  delete(url:string,param:any){
    url = this.url + url;
    var header:HttpHeaders= this.getHeader('application/json');
    return this.http.delete(url,{body:JSON.stringify(param),headers:header});
  }
  post<T>(url:string,param:any):Observable<T>{
    url = this.url + url;
    var header:HttpHeaders= this.getHeader('application/json');
    console.log(header);
    return this.http.post<T>(url,param,{headers:header});
  }
}
