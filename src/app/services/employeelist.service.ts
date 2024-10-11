import { Injectable } from '@angular/core';

interface Employee {
  name: string;
  age: number;
  position: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeelistService {
  // List of employees
  private employeeList: Employee[] = [
    { name: 'Alice Johnson', age: 30, position: 'Software Engineer' }
  ];

  // Method to return the list of employees
  getEmployees(): Employee[] {
    return this.employeeList;
  }

  // Method to add a new employee to the list
  addEmployee(employee: Employee): void {
    this.employeeList.push(employee);
  }
}
