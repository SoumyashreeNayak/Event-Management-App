import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../class/employee';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private  http:HttpClient) {}

  url:string = "http://localhost:3000";

  addEmployee(firstname:string,lastname:string, email:string):Observable<any>{
    let employee ={
      "firstname": firstname,
      "lastname" : lastname,
      "email"     : email
    };
    const header ={'content-type':'application/json'};

    return this.http.post(`${this.url}/employee`,employee ,{headers:header});
  }
  getAllEmp():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.url}/employee`);
  }
  GetEmpById(id:string):Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/employee/${id}`);
  }
  deleteById(id:string):Observable<Employee[]>  {
    return this.http.delete<Employee[]>(`${this.url}/employee/${id}`);
  }
  UpdateEmployee(id: string, firstName:string, lastName:string, emailId:string ):Observable<any> {
    const updateData={
      "firstname":firstName,
      "lastname": lastName,
      "email": emailId
    };
    const header ={'content-type':'application/json'};
    return this.http.put<Employee>(`${this.url}/employee/${id}`,updateData,{headers:header});
  }
}
