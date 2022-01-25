import { NovoChamadoComponent } from './novo-chamado/novo-chamado.component';
import { ChamadoComponent } from './chamado.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ChamadoComponent},
  {path: 'novo', component: NovoChamadoComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChamadoRoutingModule { }
