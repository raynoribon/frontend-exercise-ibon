import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { EmployeeVM } from 'src/app/_models/common';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  employees !: EmployeeVM[];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service : EmployeeService

  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        id: [""],
        firstName: [""],
        lastName: [""],
        email: [""],        
      }
    );

    this.getAll();
  }

  getAll() {    
    debugger;
    this.service      
      .getAll()
      .subscribe((response: EmployeeVM[]) => {
          if(response)          
            this.employees = response;                        
      });
  } 

  onSubmit(){
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }    

    this.employees.forEach((emp) => {      
      if(emp.id == this.form.value.id){
        alert("duplicate!!");
        return;
      }

    });

    this.service
    .save(this.form.value)    
    .subscribe({
      next: () => {      
      alert("Successfully Saved...");
      this.router.navigate(["/list"]);
    },
      error: (error) => {
        this.submitted = false;        
      },
    });


  }

}
