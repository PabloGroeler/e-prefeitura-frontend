import { Chamado } from './../shared/model/chamado';
import { Component, OnInit } from '@angular/core';
import { ChamadoService } from './chamado.service';

@Component({
  selector: 'app-chamado',
  templateUrl: './chamado.component.html',
  styleUrls: ['./chamado.component.scss']
})
export class ChamadoComponent implements OnInit {

  chamados: Chamado[];

  constructor(private chamadoService: ChamadoService) { }

  ngOnInit() {
    var response = this.chamadoService.findAll().subscribe(data => this.chamados = data)
    console.log(response)
  }

}
