import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cricketer",
  templateUrl: "./cricketer.component.html",
  styleUrls: ["./cricketer.component.css"]
})
export class CricketerComponent implements OnInit {
  players = ["sachin", "kohli", "Ms Doni", "Rahul"];

  inputPlayer = null;
  Adding = false;

  Addmore() {
    this.Adding = !this.Adding;
  }
  addPlayer() {
    this.players.push(this.inputPlayer);

    this.inputPlayer = null;

    this.Adding = false;
  }
  btndis: boolean = false;

  constructor() {}

  ngOnInit() {}
}
