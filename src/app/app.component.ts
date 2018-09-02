import { Component, OnInit, OnDestroy } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { LanguageService } from './services/language/language.service';
import { SpinnerService } from './services/spinner/spinner.service';
import { Observable, Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  showSpinner = false;
  showSearch = true;
  showAdvancedSearch = true;
  private spinnerSubscription: Subscription;

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService,
    private spinnerService: SpinnerService,
    private router: Router
  ) {
    this.translate.setDefaultLang(this.languageService.getLanguage());
  }

  public goToAdvancedSearch = () => {
    this.router.navigateByUrl('/advanced-search');
  }

  ngOnInit() {
    this.spinnerSubscription = this.spinnerService.showSpinner.subscribe((show) => {
      this.showSpinner = show;
    });

    this.router.events.pipe(
      filter((event: Event) => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) =>  {
      console.log(event);
      this.showSearch = event.url !== '/advanced-search';
      this.showAdvancedSearch = event.url !== '/advanced-search';
    });
  }

  ngOnDestroy() {
    if (this.spinnerSubscription) {
      this.spinnerSubscription.unsubscribe();
    }
  }
}
