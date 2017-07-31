import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationComponent } from './pagination.component';

import { TranslateComboModule } from '../translatecombo/translatecombo.module';

@NgModule({
    imports: [
        CommonModule,
        TranslateComboModule
    ],
    exports: [
        PaginationComponent
    ],
    declarations: [
        PaginationComponent
    ]
})
export class PaginationModule { }
