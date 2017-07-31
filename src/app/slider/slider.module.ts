import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderComponent } from './slider.component';

import { TranslateComboModule } from '../shared/components/translatecombo/translatecombo.module';

@NgModule({
    imports: [
        CommonModule,
        TranslateComboModule
    ],
    exports: [
        SliderComponent
    ],
    declarations: [
        SliderComponent
    ]
})
export class SliderModule { }
