import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './loading.component';

import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    imports: [
        CommonModule,
        ModalModule.forRoot()
    ],
    exports: [
        LoadingComponent
    ],
    declarations: [
        LoadingComponent
    ],
    entryComponents: [
        LoadingComponent
    ]
})
export class LoadingModule { }
