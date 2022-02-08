import { NovoChamadoResolver } from './novo-chamado/guard/novo-chamado.resolver';
import { NovoChamadoComponent } from './novo-chamado/novo-chamado.component';
import { ChamadoComponent } from './chamado.component';
import { NgModule, Component } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChamadoComponent},
  { path: 'novo', component: NovoChamadoComponent },
  { 
    path: 'edit/:id', 
    component: NovoChamadoComponent,
    resolve: {chamado: NovoChamadoResolver}
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChamadoRoutingModule { }
