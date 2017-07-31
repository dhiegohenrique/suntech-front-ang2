import { TestBed, inject } from '@angular/core/testing';

import { LoadingService } from './loading.service';
import { DialogService } from 'ng2-bootstrap-modal';
import { TranslateService, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateStore } from '@ngx-translate/core/src/translate.store';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ConnectionBackend, RequestOptions, BaseRequestOptions, Http } from '@angular/http';

import {MockBackend, MockConnection} from '@angular/http/testing';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

describe('LoadingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoadingService,
        DialogService,
        TranslateStore,
        {
          provide: Http, useFactory: (backend, options) => {
            return new Http(backend, options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions
      ],
      imports: [
        TranslateModule.forChild({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [Http]
          }
        })
      ],
    });
  });

  it('should be created', inject([LoadingService], (service: LoadingService) => {
    expect(service).toBeTruthy();
  }));
});
