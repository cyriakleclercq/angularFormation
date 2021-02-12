import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  nom: string = "Marie";
  nombre: number = 3.145957;
  pourcent: number = 0.25;
  date: any = Date.now();

  message: string = "message depuis ts";

  users = [
    { name: "Jean", age: 45 },
    { name: "Pierre", age: 40 },
    { name: "Anne", age: 29 },
  ]

  user = { nom: "Marie", age: 29 };

  img = "https://upload.wikimedia.org/wikipedia/commons/6/6e/Beer_mug_transparent.png"

  constructor() { }

  hello = (param?: string) => {
    param ?
      alert('Bonjour ' + param)
      : alert('Bonjour à tous');
  }

  ngOnInit() {
  }

}
