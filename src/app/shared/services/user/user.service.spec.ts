/* tslint:disable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from './user.service';

import { ConnectionBackend, RequestOptions, BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';

import {MockBackend, MockConnection} from '@angular/http/testing';
import { LoadingService } from '../loading/loading.service';
import { DialogService } from 'ng2-bootstrap-modal';
import { TranslateComboModule } from '../../components/translatecombo/translatecombo.module';
import { Observable } from 'rxjs/Observable';

describe('UserService', () => {

  let users: Array<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        {
          provide: Http, useFactory: (backend, options) => {
            return new Http(backend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
        LoadingService,
        DialogService
      ],
      imports: [
        TranslateComboModule
      ]
    });

    fillInUsers();
  });

  function fillInUsers() {
    users = new Array<any>();

    for (let index = 1; index <= 2; index++) {
      let user = {
        id: (index),
        name: `usuario${index}`,
        surname: `sobrenome${index}`,
        userName: `username${index}`,
        email: `email${index}@hotmail.com`,
        password: `senha${index}`,
        phone: `phone${index}`,
        enabled: 'true'
      }
      
      users.push(user);
    }
  }

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should be returns the users', inject([UserService, MockBackend], (service: UserService, mockBackend: MockBackend) => {
    mockBackend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify(users)
      });
      
      connection.mockRespond(new Response(options));
    });

    service
      .getUsers(0, 5)
      .subscribe((response: Response) => {
        expect(JSON.stringify(response)).toEqual(JSON.stringify(users));
      });
  }));
});
