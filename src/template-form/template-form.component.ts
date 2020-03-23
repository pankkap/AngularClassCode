import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  btnclick() {
    alert('Thanks for Subscribing Me');
  }

  onSubmit(form: NgForm) {
    console.log('Course Name is : ' + form.value.courseName);
    console.log('Course Desc is : ' + form.value.courseDesc);
    console.log('Course Amount is : ' + form.value.courseAmount);
  }

  // onClear() {
  //   this.courseForm.reset();
  // }

  onDelete() {}
}
