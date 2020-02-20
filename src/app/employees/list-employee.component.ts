import { Component, OnInit } from "@angular/core";
import { Employee } from "../models/employee.model";

@Component({
  selector: "app-list-employee",
  templateUrl: "./list-employee.component.html",
  styleUrls: ["./list-employee.component.css"]
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [
    {
      id: 1,
      name: "Sachin",
      gender: "Male",
      contactPreference: "Email",
      phoneNumber: 1234567890,
      email: "mark@pragimtech.com",
      dateOfBirth: new Date("10/25/1988"),
      department: "IT",
      isActive: true,
      photoPath: "assets/images/1.png"
    },
    {
      id: 2,
      name: "Shalini",
      gender: "female",
      contactPreference: "Phone",
      email: "salini@gmail.com",
      phoneNumber: 1234567890,
      dateOfBirth: new Date("07/15/1987"),
      department: "Mech",
      isActive: true,
      photoPath: "assets/images/8.png"
    },

    {
      id: 3,
      name: "Manisha",
      gender: "female",
      contactPreference: "Email",
      email: "manisha@gmail.com",
      phoneNumber: 1234567890,
      dateOfBirth: new Date("12/15/1983"),
      department: "IT",
      isActive: true,
      photoPath: "assets/images/9.png"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
