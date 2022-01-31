/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NovoChamadoService } from './novo-chamado.service';

describe('Service: NovoChamado', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NovoChamadoService]
    });
  });

  it('should ...', inject([NovoChamadoService], (service: NovoChamadoService) => {
    expect(service).toBeTruthy();
  }));
});
