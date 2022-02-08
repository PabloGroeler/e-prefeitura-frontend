import { Chamado } from './../../../shared/model/chamado';
import { ChamadoService } from './../../chamado.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NovoChamadoResolver implements Resolve<Chamado> {

  constructor(private service: ChamadoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Chamado> {
    console.log("Resolver is working")
    return this.service.findById(route.paramMap.get('id')).pipe(result => { return result })
  }
}
