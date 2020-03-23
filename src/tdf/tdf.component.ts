import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TDFComponent implements OnInit {

  Register(RegForm: NgForm)
  {
      console.log(RegForm);
  }
  constructor() { }

  ngOnInit() {
  }

}
