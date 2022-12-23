import { Component, OnInit } from '@angular/core';
import { Employee2 } from '../models/employee';

@Component({
  selector: 'app-pipe-ass2',
  templateUrl: './pipe-ass2.component.html',
  styleUrls: ['./pipe-ass2.component.css']
})
export class PipeAss2Component implements OnInit {
  emp: Employee2[] = [
    {empId: 101, empName: 'Suhas', empCity: 'Sangola', empGender: 'Male', empDept: 'IT', empCompany: 'TCS', empSalary: '85000' },
    {empId: 102, empName: 'Akash', empCity: 'Kolhapur', empGender: 'Male', empDept: 'IT', empCompany: 'Wipro', empSalary: '85000' },
    {empId: 103, empName: 'Sanket', empCity: 'Sangli', empGender: 'Male', empDept: 'Finace', empCompany: 'Infosys', empSalary: '70000' },
    {empId: 104, empName: 'Priya', empCity: 'Pune', empGender: 'Female', empDept: 'HR', empCompany: 'Atos', empSalary: '75000' },
    {empId: 105, empName: 'Sakshi', empCity: 'Mumbai', empGender: 'Female', empDept: 'IT', empCompany: 'TCS', empSalary: '200000' },
    {empId: 106, empName: 'Pramod', empCity: 'Solapur', empGender: 'Male', empDept: 'Finace', empCompany: 'TCS', empSalary: '65000' },
    {empId: 107, empName: 'Sanika', empCity: 'Sangli', empGender: 'Female', empDept: 'Finace', empCompany: 'Infosys', empSalary: '60000' },
    {empId: 108, empName: 'Atharv', empCity: 'Satara', empGender: 'Male', empDept: 'HR', empCompany: 'Wipro', empSalary: '80000' },
    {empId: 109, empName: 'Divya', empCity: 'Sangli', empGender: 'Female', empDept: 'HR', empCompany: 'Tech Mahindra', empSalary: '70000' },
    {empId: 110, empName: 'Shruti', empCity: 'Pune', empGender: 'Female', empDept: 'IT', empCompany: 'Infosys', empSalary: '55000' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
