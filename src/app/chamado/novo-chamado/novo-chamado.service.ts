import { Chamado } from './../../shared/model/chamado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NovoChamadoService {

  private readonly API = 'http://localhost:3001'

constructor(private http: HttpClient) {

}

  list() {
    return this.http.get(`${this.API}/chamados`)
  }

  onSubmit(chamado: Chamado) {
    console.log("service")
    console.log(chamado)
    return this.http.post(`${this.API}/chamados`, chamado)
  }

}
