import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormComponent } from './form.component';

import { TranslateComboModule } from '../shared/components/translatecombo/translatecombo.module';

@NgModule({
    imports: [
        CommonModule,
        TranslateComboModule
    ],
    exports: [
        FormComponent
    ],
    declarations: [
        FormComponent
    ]
})
export class FormModule { }
