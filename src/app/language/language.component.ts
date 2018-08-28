import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  language = new FormControl();
  public availableLanguages: Array<string> = [];
  selectedLanguage = 'en';

  constructor(
    private translate: TranslateService
  ) { }

  public changeLanguage = (language: string) => {
    console.log(language);
    this.translate.use(language);
  }

  ngOnInit() {
    this.availableLanguages.push('en', 'de');
    this.language.valueChanges.subscribe(value => { console.log(value); });
  }

}
