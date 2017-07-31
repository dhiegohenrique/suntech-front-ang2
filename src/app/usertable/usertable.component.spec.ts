/* tslint:disable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { UserTableComponent } from './usertable.component';
import { SharedModule } from '../shared/shared.module';
import { DataTableModule } from 'angular2-datatable';
import { TranslateComboModule } from '../shared/components/translatecombo/translatecombo.module';

import { ConnectionBackend, RequestOptions, BaseRequestOptions, Response, Http, ResponseOptions } from '@angular/http';

import {MockBackend, MockConnection} from '@angular/http/testing';
import { inject } from '@angular/core/testing';
import { UserService } from '../shared/services/user/user.service';
import { Observable } from 'rxjs/Observable';
import { TranslateService } from '@ngx-translate/core';

// export class UserMockService {

//   users: Array<any>;

//   constructor() {
//     this.users = new Array<any>();

//     for (let index = 1; index <= 3; index++) {
//       let user = {
//         id: (index),
//         name: `usuario${index}`,
//         surname: `sobrenome${index}`,
//         userName: `username${index}`,
//         email: `email${index}@hotmail.com`,
//         password: `senha${index}`,
//         phone: `phone${index}`,
//         enabled: 'true'
//       }
      
//       this.users.push(user);
//     }
//   }

//   getUsers(page: number, size: number) {
//     console.log('entrou no mock');
//     return Observable.of(this.users);
//   }
// }

describe('UserTableComponent', () => {
  let component: UserTableComponent;
  let fixture: ComponentFixture<UserTableComponent>;

  let users: Array<any>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTableComponent ],
      imports: [
        SharedModule,
        DataTableModule,
        TranslateComboModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers: [
        {
          provide: Http, useFactory: (backend, options) => {
            return new Http(backend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
        // {
        //   provide: UserService, 
        //   useClass: UserMockService
        // }
        UserService
      ]
    })
    .compileComponents();

    fillInUsers();
    let userService = TestBed.get(UserService);
    let response = {
      content: users,
      totalElements: users.length
    };
    
    spyOn(userService, 'getUsers').and.returnValue(Observable.of(response));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function fillInUsers() {
    users = new Array<any>();

    for (let index = 1; index <= 3; index++) {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be create one <tr> for each user', () => {
    let tr = fixture.debugElement.queryAll(By.css('tr'));
    expect((tr.length - 2)).toEqual(users.length);
  });

  it('should be show a message when users is empty', () => {
    component.users = new Array<any>();
    fixture.autoDetectChanges();

    let message = fixture.debugElement.queryAll(By.css('.alert'));
    expect(message.length).toEqual(1);
  });
});
