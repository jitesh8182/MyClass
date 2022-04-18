import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable, catchError, Subject, BehaviorSubject } from 'rxjs';
import { Class } from '../models/class.model';
@Injectable({providedIn: 'root'})
export class ClasssrvService {
  url="http://localhost:3000/class"


  // classsubject=new BehaviorSubject<String>(null);
  classchanged = new Subject<Class[]>();
  class:Class[] = [];
  constructor(private http: HttpClient) {}
  
  // #Get all class
  // classes(){
  //   return this.http.get(this.url)}
  
  // updateClass(data:any){
  //   this.classsubject.next(data)}
  
  addClass(classs:any ):Observable<any>{
    return this.http.post<any>(this.url,classs)}

  getClass(user:any):Observable<any>{
    console.log();
    console.log(`${this.url}/get/`+user);
    
    return this.http.get(`${this.url}/get/`+user)}
}
