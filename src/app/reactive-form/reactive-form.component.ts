import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  courseForm: FormGroup;  // create a prperty of type formgroup


  constructor() {}

  ngOnInit() {
    this.initForm();
  }
  onSubmit() {
      console.log(this.courseForm);
  }
  private initForm() {
    this.courseForm = new FormGroup({
      courseName: new FormControl(),
      courseDesc: new FormControl(),
      courseAmount: new FormControl()
    });
  }
}
