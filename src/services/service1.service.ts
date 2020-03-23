import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  detail = [
    { name: 'pankaj', age: 30 },
    { name: 'manish', age: 20 },
    { name: 'Arjun', age: 40 }
  ];
  productname = {name: 'pankaj', age:30};

  // name  = 'Pankaj Kapoor';
  msgScribe() {
    alert(' You succesfully Subscribe ');
  }

  constructor() {}
}
