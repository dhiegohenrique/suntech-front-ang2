import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmModalComponent } from './confirmmodal.component';

import { TranslateComboModule } from '../translatecombo/translatecombo.module';

import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    imports: [
        CommonModule,
        TranslateComboModule,
        ModalModule.forRoot()
    ],
    exports: [
        ConfirmModalComponent
    ],
    declarations: [
        ConfirmModalComponent
    ],
    entryComponents: [
        ConfirmModalComponent
    ]
})
export class ConfirmModalModule { }
