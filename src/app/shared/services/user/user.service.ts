import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { environment } from '../../../../environments/environment';

import { LoadingService } from '../loading/loading.service';

@Injectable()
export class UserService {

  constructor(private http: Http, private loadingService: LoadingService) { }

  getUsers(page: number, size: number) {
    this.loadingService.openModal();
    return this.http.get(this.getUrl(page, size))
      .map((res: Response) => res.json())
      .finally(() => this.loadingService.closeModal());
  }

  getUrl(page: number, size: number) {
    return environment.urlUsers + `?page=${page}&size=${size}`;
  }
}
