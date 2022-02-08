import { Chamado } from 'app/shared/model/chamado';
import { ChamadoService } from '../chamado.service';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-novo-chamado',
  templateUrl: './novo-chamado.component.html',
  styleUrls: ['./novo-chamado.component.scss']
})
export class NovoChamadoComponent implements OnInit {

  @Input()
  chamado?: Chamado;
  formChamado: FormGroup;

  constructor(private chamadoService: ChamadoService, private route: ActivatedRoute) { }

  ngOnInit() {
      const chamadoEdit = this.route.snapshot.data['chamado']
      console.log(chamadoEdit)
      if (chamadoEdit)
        this.chamado = chamadoEdit;
        
      this.createForm(this.chamado);          
  }

  createForm(chamado: Chamado) {
    console.log("chamado aqui")
    console.log(chamado)
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
