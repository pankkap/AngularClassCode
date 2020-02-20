import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-like",
  templateUrl: "./like.component.html"
})
export class LikeComponent implements OnInit {
  Nooflikes = 0;
  ClickLikes() {
    this.Nooflikes++;
  }
  ClickDisLikes() {
    this.Nooflikes--;
  }
  constructor() {}

  ngOnInit() {}
}
