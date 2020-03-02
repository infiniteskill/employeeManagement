

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Department} from 'src/app/models/department-model'
import {Employee} from 'src/app/models/employee-model'
import {Observable} from 'rxjs'
import {Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  formData:Employee;


  readonly APIUrl="http://127.0.0.1:8000/employee/api/"
  getEmpList():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.APIUrl)
  }
addEmployee(dep:Employee){

  return this.http.post(this.APIUrl,dep)
}
private _listners=new Subject<any>();
listen():Observable<any>{
  return this._listners.asObservable();

}
filter(filterBy:string){
  this._listners.next(filterBy)
}
deleteEmployee(id:number){

  return this.http.delete(this.APIUrl+id)
}

updateEmployee(dep:Employee){
 return this.http.put(this.APIUrl+dep.EmployeeID,dep);

}

getDepDropDownValues():Observable<any>{
  return this.http.get("http://127.0.0.1:8000/department/deplist")
}

}

