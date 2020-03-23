import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {
product={};
  constructor(private _myservice : Service1Service) { }

  ngOnInit() {
    this.product = this._myservice.productname;
  }
btnclick()
{
  this._myservice.msgScribe();
}
}
