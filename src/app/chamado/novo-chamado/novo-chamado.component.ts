import { NovoChamadoService } from './novo-chamado.service';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Chamado } from './../../shared/model/chamado';

@Component({
  selector: 'app-novo-chamado',
  templateUrl: './novo-chamado.component.html',
  styleUrls: ['./novo-chamado.component.scss']
})
export class NovoChamadoComponent implements OnInit {

  formChamado: FormGroup;

  constructor(private chamadoService: NovoChamadoService) { }

  ngOnInit() {
    this.createForm(new Chamado())
    this.chamadoService.list().subscribe() /// TODO: chamado => this.chamado = chamado; dentro do subscribe
  }

  createForm(chamado: Chamado) {
    this.formChamado = new FormGroup({
      titulo: new FormControl(chamado.titulo),
      descricao: new FormControl(chamado.descricao)
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log("@@@@@@@@@LOGANDO@@@@@@@@@@");
    console.log(this.formChamado.value);
    this.chamadoService.onSubmit(this.formChamado.value)
  
    // chamando a função createForm para limpar os campos na tela
    this.createForm(new Chamado());
  }

}
