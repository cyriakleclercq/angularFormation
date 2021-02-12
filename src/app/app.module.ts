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
import { AffichageComponent } from './exoHeritage/affichage/affichage.component';
import { FormulaireComponent } from './exoHeritage/formulaire/formulaire.component';
import { ErrorComponent } from './error/error.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonneComponent,
    TodolistComponent,
    FormulaireDeBaseComponent,
    FormulaireDynamiqueComponent,
    ParentComponent,
    EnfantComponent,
    AffichageComponent,
    FormulaireComponent,
    ErrorComponent,
    NavbarComponent,
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
