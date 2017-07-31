/* tslint:disable */

import { TestBed, async } from '@angular/core/testing';
import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  let pipe;
  let users = [
    {
      id: '1',
      name: 'usuario1',
      surname: 'sobrenome1',
      userName: 'usernam1',
      email: 'email1@hotmail.com',
      password: 'senha1',
      phone: 'phone1',
      registerDate: new Date(),
      enabled: 'true'
    }
  ]

  beforeAll(() => {
    pipe = new SearchPipe();
  });
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should be test the transform when value starts with', () => {
    let transform = pipe.transform(users, ['name', 'surname'], 'usu');
    expect(transform.length).toEqual(1);
  });

  it('should be test the transform when value starts with and not found', () => {
    let transform = pipe.transform(users, ['name', 'surname'], 'MARIA');
    expect(transform.length).toEqual(0);
  });

  it('should be test the transform when value contains', () => {
    let transform = pipe.transform(users, ['email'], 'hotmail.com', true);
    expect(transform.length).toEqual(1);
  });

  it('should be test the transform when value contains and not found', () => {
    let transform = pipe.transform(users, ['email'], 'yahoo.com.br', true);
    expect(transform.length).toEqual(0);
  });
});
