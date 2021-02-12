import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AffichageComponent } from './exoHeritage/affichage/affichage.component';
import { FormulaireDeBaseComponent } from './formulaire-de-base/formulaire-de-base.component';
import { FormulaireDynamiqueComponent } from './formulaire-dynamique/formulaire-dynamique.component';
import { TodolistComponent } from './todolist/todolist.component';


const routes: Routes = [
  { path: "", component: TodolistComponent },
  { path: "heritage", component: AffichageComponent },
  {
    path: "formulaire", component: FormulaireDeBaseComponent, children: [
      { path: "dynamique", component: FormulaireDynamiqueComponent }
    ]
  },
  { path: "404", component: ErrorComponent },
  { path: "**", redirectTo: "404" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
