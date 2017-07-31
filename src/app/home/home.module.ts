import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { SliderModule } from '../slider/slider.module';

import { FormModule } from '../form/form.module';

import { UserTableModule } from '../usertable/usertable.module';

import { TranslateComboComponent } from '../shared/components/translatecombo/translatecombo.component';

@NgModule({
    imports: [
        CommonModule,
        SliderModule,
        FormModule,
        UserTableModule
    ],
    exports: [
        HomeComponent
    ],
    declarations: [
        HomeComponent,
        TranslateComboComponent
    ]
})
export class HomeModule { }
