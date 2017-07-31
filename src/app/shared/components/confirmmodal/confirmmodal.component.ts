import { Component, OnInit, ComponentRef } from '@angular/core';
import { IModalDialog, IModalDialogOptions, IModalDialogButton } from 'ngx-modal-dialog';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

export interface IConfirmModal {
  title: string;
  message: string;
}

@Component({
  selector: 'app-confirmmodal',
  templateUrl: './confirmmodal.component.html',
  styleUrls: ['./confirmmodal.component.css']
})
export class ConfirmModalComponent extends DialogComponent<IConfirmModal, boolean> implements IConfirmModal {
  title: string;
  message: string;

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  confirm() {
    this.result = true;
    this.close();
  }
}
