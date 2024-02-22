import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeListComponent, CreateEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Candb';
}
