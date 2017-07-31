import { Injectable } from '@angular/core';

import { DialogService } from 'ng2-bootstrap-modal';

import { Subscription } from 'rxjs/Subscription';

import { TranslateService } from '@ngx-translate/core';

import { LoadingComponent } from '../../components/loading/loading.component';

@Injectable()
export class LoadingService {

  private disposable: Subscription;

  constructor(
    private dialogService: DialogService,
    private translateService: TranslateService
  ) { }

  openModal() {
    this.translateService.get('loading').subscribe((loading: string) => {
      this.disposable = this.dialogService.addDialog(LoadingComponent, {
        title: loading
      }).subscribe();
    });
  }

  closeModal() {
    if (this.disposable) {
      this.disposable.unsubscribe();
    }
  }
}
