import { TestBed } from '@angular/core/testing';

import { NovoChamadoResolver } from './novo-chamado.resolver';

describe('NovoChamadoResolver', () => {
  let resolver: NovoChamadoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(NovoChamadoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
