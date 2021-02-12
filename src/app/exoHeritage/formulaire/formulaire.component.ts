import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from '../Iusers';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  userForm: FormGroup;
  @Output() newUser = new EventEmitter<Users>();

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      age: ["", Validators.required]
    })
  }

  ngOnInit() {
  }

  envoie = () => {
    if (this.userForm.valid) {
      this.newUser.emit(this.userForm.value);
    }
  }

}
