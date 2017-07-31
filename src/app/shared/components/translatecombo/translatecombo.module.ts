import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http } from '@angular/http';
import { Title } from '@angular/platform-browser';

import { TranslateModule, TranslateLoader, TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateStore } from '@ngx-translate/core/src/translate.store';

import { environment } from '../../../../environments/environment';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forChild({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [Http]
          }
        })
    ],
    exports: [
      TranslateModule
    ],
    providers: [
      TranslateStore
    ]
})
export class TranslateComboModule {
  private defaultLang = 'en';

  constructor(private translateService: TranslateService,
    private titleService: Title,
    private http: Http) {
      const browserLang: string = this.translateService.getBrowserLang();
      const langs: string[] = new Array();

      environment.languages.forEach((lang: string) => {
        if (lang === browserLang) {
          this.defaultLang = lang;
        }

        langs.push(lang);
      });

      this.translateService.addLangs(langs);
      this.translateService.use(this.defaultLang);
      this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
        this.setTitle();
      });
    }

  setTitle() {
    this.translateService.get('title').subscribe((title: string) => {
      this.titleService.setTitle(title);
    });
  }
}
