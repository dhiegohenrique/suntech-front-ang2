import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';

import { UserTableComponent } from './usertable.component';

import { SharedModule } from '../shared/shared.module';

import { TranslateComboModule } from '../shared/components/translatecombo/translatecombo.module';
import { PaginationModule } from '../shared/components/pagination/pagination.module';
import { LoadingModule } from '../shared/components/loading/loading.module';

import { DataTableModule } from 'angular2-datatable';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalDialogComponent } from 'ngx-modal-dialog';

import { ModalDialogModule } from 'ngx-modal-dialog';
import { ConfirmModalComponent } from '../shared/components/confirmmodal/confirmmodal.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateComboModule,
        DataTableModule,
        SharedModule,
        PaginationModule,
        ModalModule.forRoot(),
        ModalDialogModule.forRoot()
    ],
    exports: [
        UserTableComponent
    ],
    declarations: [
        UserTableComponent
    ],
    providers: [
    ],
    entryComponents: [
        // ModalDialogComponent
        // ConfirmModalComponent
    ]
})
export class UserTableModule { }
