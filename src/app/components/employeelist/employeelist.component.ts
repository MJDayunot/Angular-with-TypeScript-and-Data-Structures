import { Component } from '@angular/core';
import { EmployeelistService } from '../../services/employeelist.service';

interface Employee {
  name: string;
  age: number;
  position: string;
}

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeeListComponent {
  employeeName: string = '';
  employeeAge: number | null = null;
  employeePosition: string = '';
  employeeList: Employee[] = [];

  // Inject the service into the component
  constructor(private employeelistService: EmployeelistService) {}

  // Load employees on component initialization
  ngOnInit() {
    this.employeeList = this.employeelistService.getEmployees();
  }

  // Add a new employee using the service
  addEmployee() {
    if (this.employeeName && this.employeeAge !== null && this.employeePosition) {
      const newEmployee: Employee = {
        name: this.employeeName,
        age: this.employeeAge,
        position: this.employeePosition
      };
      this.employeelistService.addEmployee(newEmployee);  // Add employee via service
      this.employeeList = this.employeelistService.getEmployees();  // Refresh the list
      this.clearInputs();
    }
  }

  clearInputs() {
    this.employeeName = '';
    this.employeeAge = null;
    this.employeePosition = '';
  }
}
