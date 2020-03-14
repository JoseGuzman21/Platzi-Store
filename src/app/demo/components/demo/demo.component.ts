import { Component, OnInit } from "@angular/core";
import { NgModule } from '@angular/core';

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"]
})
export class DemoComponent implements OnInit {
  title = "platzi-store";

  item = ["Jose", "Armando", "Guzman"];

  objeto = {};
  power = this;
  constructor() {}

  ngOnInit() {}
  addItem() {
    this.item.push(this.title);
  }

  deleteItem(index: number) {
    this.item.splice(index, 1);
  }
}
