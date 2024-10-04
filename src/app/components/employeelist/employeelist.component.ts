import { Component } from '@angular/core';  // Import Component

// Define an interface for the Employee structure
interface Employee {
  name: string;
  age: number;
  position: string;
}

@Component({
  selector: 'app-employeelist',  // Ensure this matches your HTML tag
  templateUrl: './employeelist.component.html',  // Path to the HTML file
  styleUrls: ['./employeelist.component.css']  // Path to the CSS file
})
export class EmployeeListComponent {
  // Declare properties for employee details
  employeeName: string = '';  // Variable to hold the employee name input
  employeeAge: number | null = null;  // Variable to hold the employee age input
  employeePosition: string = '';  // Variable to hold the employee position input

  // Array to hold the list of employees
  employeeList: Employee[] = [
    { name: 'Alice Johnson', age: 30, position: 'Software Engineer' }
  ];

  // Method to add a new employee to the list
  addEmployee() {
    if (this.employeeName && this.employeeAge !== null && this.employeePosition) {
      const newEmployee: Employee = {
        name: this.employeeName,
        age: this.employeeAge,
        position: this.employeePosition
      };
      this.employeeList.push(newEmployee);  // Add the new employee to the list
      this.clearInputs();  // Clear the input fields after adding the employee
    }
  }

  // Method to clear input fields
  clearInputs() {
    this.employeeName = '';
    this.employeeAge = null;  // Reset to null
    this.employeePosition = '';
  }
}
