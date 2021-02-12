import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../Iuser';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent implements OnInit {

  @Input() tableau: [User];
  @Output() newUser = new EventEmitter<User>()

  constructor() { }

  ngOnInit() {
  }

  addEnfant = () => {
    this.newUser.emit({ name: "jeanne", age: 45 });
  }
}
