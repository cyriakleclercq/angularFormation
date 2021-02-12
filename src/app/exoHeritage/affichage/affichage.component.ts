import { Component, OnInit } from '@angular/core';
import { Users } from '../Iusers';

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit {

  users: Users[] = [{
    nom: "Dupont", prenom: "Jean", age: 24
  }, { nom: "Guerrier", prenom: "Robie", age: 21 }, { nom: "Routier", prenom: "Benoit", age: 26 }]


  constructor() { }

  ngOnInit() {
  }

  add = (user: Users) => {
    this.users.push(user);
  };

}
