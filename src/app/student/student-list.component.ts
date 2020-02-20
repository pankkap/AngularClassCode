import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [
    {
      rollno: 1,
      name: 'Sachin',
      email: 'sachin@gmail.com',
      dateOfBirth: new Date('10/25/1985'),
      section: 'CS',
      gender: 'male',
      mobile: 1234567,
      address: 'Vrindawan',
      image: 'assets/images/1.png'
    },
    {
      rollno: 2,
      name: 'shalini',
      gender: 'female',
      email: 'salini@gmail.com',
      dateOfBirth: new Date('07/15/1987'),
      section: 'Mech',
      mobile: 1234567,
      address: 'Mathura',
      image: 'assets/images/2.png'
    },
    {
      rollno: 3,
      name: 'manisha',
      gender: 'female',
      email: 'manisha@gmail.com',
      dateOfBirth: new Date('12/15/1983'),
      section: 'CS',
      mobile: 1234567,
      address: 'Mathura',
      image: 'assets/images/3.png'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
