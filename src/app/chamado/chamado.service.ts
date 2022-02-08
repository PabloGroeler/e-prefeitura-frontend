import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chamado } from 'app/shared/model/chamado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  private readonly API = 'http://localhost:3001'

  constructor(private http: HttpClient) {

  }

  findById(id: string): Observable<Chamado> {
    return this.http.get<Chamado>(`${this.API}/chamados/${id}`);
  }

  findAll(): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(`${this.API}/chamados`);
  }

  onSubmit(chamado: Chamado) {
    console.log("service")
    console.log(chamado)
    return this.http.post(`${this.API}/chamados`, chamado).subscribe(data => console.log("subscribe:" + data), error => console.log("Something was wrong!"))
  }

}
