import { Component, OnInit, OnDestroy } from '@angular/core';

import { TranslateService, DefaultLangChangeEvent } from '@ngx-translate/core';

import { Subscription } from 'rxjs/Rx';

import { Language } from './models/language';

@Component({
  selector: 'app-translatecombo',
  templateUrl: './translatecombo.component.html',
  styleUrls: ['./translatecombo.component.css']
})
export class TranslateComboComponent implements OnInit, OnDestroy {

  languages: Language[] = new Array();
  languageSubscription: Subscription;
  defaultLang: string;

  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
    this.languageSubscription = this.translateService.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => {
      this.fillInLanguages();
      this.defaultLang = event.lang;
    });
  }

  fillInLanguages() {
    this.translateService.getLangs().forEach((lang: string) => {
        this.translateService.getTranslation(lang).subscribe((translationObj) => {
          this.languages.push(this.getLanguage(lang, translationObj));
        });
    });
  }

  getLanguage(id, translationObj) {
    const lang = new Language();
    lang.setId(id);
    lang.setDescription(translationObj['description']);
    return lang;
  }

  changeLanguage(id) {
    this.translateService.use(id);
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}
