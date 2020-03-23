import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {
product: string;

  constructor(private _myservice: Service1Service) { }

  ngOnInit() {
  }
  btnclick()
  {
    this._myservice.msgScribe();
  }
}
