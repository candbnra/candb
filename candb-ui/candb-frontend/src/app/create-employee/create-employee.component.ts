import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})

export class CreateEmployeeComponent implements OnInit {
  
  employee: Employee = new Employee(0, "", "","");

  constructor(private employeeService: EmployeeService) { }


  ngOnInit(): void {

  }

  onSubmit(): void {
   // this.employeeService.saveEmployee(employee).subscribe(data => 
   //   )

  }
  

}
