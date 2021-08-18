import { Component, OnInit } from '@angular/core';
import { APIResponse, EmployeeVM } from 'src/app/_models/common';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees !: EmployeeVM[];

  constructor(
    private service : EmployeeService
  ) {}

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {    
    //debugger;
    this.service      
      .getAll()
      .subscribe((response: EmployeeVM[]) => {
          if(response)          
            this.employees = response;                        
      });
  }

  delete(id: number){    
    this.service.delete(id).subscribe((response: APIResponse<string>) => {
      if (response.success)
      alert("Deleted successfully");
      this.reloadForm();
    });
  }

  reloadForm() {
    this.getAll();
  }

}
