/* tslint:disable */

import { TestBed, async } from '@angular/core/testing';
import { KeysPipe } from './keys.pipe';

describe('KeysPipe', () => {
  let pipe;

  beforeAll(() => {
    pipe = new KeysPipe();
  });
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should be test the transform', () => {
    let user = {
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

    let objectKeys = Object.keys(user);
    let transform = pipe.transform(user);
    expect(transform).toEqual(objectKeys);
  });
});
