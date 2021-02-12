import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonneComponent } from './personne/personne.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FormulaireDeBaseComponent } from './formulaire-de-base/formulaire-de-base.component';
import { FormulaireDynamiqueComponent } from './formulaire-dynamique/formulaire-dynamique.component';
import { ParentComponent } from './heritage/parent/parent.component';
import { EnfantComponent } from './heritage/enfant/enfant.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    TodolistComponent,
    FormulaireDeBaseComponent,
    FormulaireDynamiqueComponent,
    ParentComponent,
    EnfantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
