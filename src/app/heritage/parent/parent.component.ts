import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  tab = [{ name: "Pierre", age: 45 }, { name: "Joseph", age: 30 }, { name: "Marie", age: 15 }, { name: "Anne", age: 29 }]

  constructor() { }

  ngOnInit() {
  }

}
