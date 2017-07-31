import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';

import { routing } from './app.routing';

import { HomeModule } from './home/home.module';

import { LoadingModule } from './shared/components/loading/loading.module';
import { ConfirmModalModule } from './shared/components/confirmmodal/confirmmodal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    HomeModule,
    LoadingModule,
    ConfirmModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
