import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {Department} from 'src/app/models/department-model'
import {Observable} from 'rxjs'
import {Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  formData:Department;


  readonly APIUrl="http://127.0.0.1:8000/department/"
  getDepList():Observable<Department[]>{
    return this.http.get<Department[]>(this.APIUrl)
  }
addDepartment(dep:Department){
  return this.http.post(this.APIUrl,dep)
}
private _listners=new Subject<any>();
listen():Observable<any>{
  return this._listners.asObservable();

}
filter(filterBy:string){
  this._listners.next(filterBy)
}
deleteDepartment(id:number){

  return this.http.delete(this.APIUrl+id)
}

updateDepartment(dep:Department){
 return this.http.put(this.APIUrl+dep.DepartmentID,dep);

}

}

