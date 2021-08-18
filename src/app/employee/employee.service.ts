import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { APIResponse, EmployeeVM } from '../_models/common';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) { }

  //https://tworks-exercise-api.herokuapp.com/employee/list
  //https://tworks-exercise-api.herokuapp.com/employee/add
  //https://tworks-exercise-api.herokuapp.com/employee/delete/:id

  getAll():  Observable<EmployeeVM[]> {    
    return this.http.get<EmployeeVM[]>(`${environment.apiUrl}/employee/list`);    
  }

  save(model : EmployeeVM) {        
    return this.http.post<APIResponse<string>>(`${environment.apiUrl}/employee/add/`, model)
        .pipe(map(resp => {
            return resp.data;
        }));
  }

  delete(id: number):  Observable<APIResponse<string>> {
    return this.http.delete<APIResponse<string>>(`${environment.apiUrl}/employee/delete/${id}`);
  }


}
