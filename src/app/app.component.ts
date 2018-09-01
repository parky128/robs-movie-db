import { Component, OnInit, OnDestroy } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { LanguageService } from './services/language/language.service';
import { SpinnerService } from './services/spinner/spinner.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  showSpinner = false;
  private spinnerSubscription: Subscription;

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService,
    private spinnerService: SpinnerService
  ) {
    this.translate.setDefaultLang(this.languageService.getLanguage());
  }

  ngOnInit() {
    this.spinnerSubscription = this.spinnerService.showSpinner.subscribe((show) => {
      this.showSpinner = show;
    });
  }

  ngOnDestroy() {
    if (this.spinnerSubscription) {
      this.spinnerSubscription.unsubscribe();
    }
  }
}
