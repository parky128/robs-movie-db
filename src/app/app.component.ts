import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { LanguageService } from './services/language.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-tmdb-app'; //translate this?!

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    // translate.setDefaultLang('en');
    // translate.use('en');
    //this.languageService.selectedLanguage.subscribe(selectedLanguage => {
      this.translate.setDefaultLang(this.languageService.getLanguage());
      //window.location.reload();
      //this.router.navigateByUrl(location.pathname);
    //});
  }

  ngOnInit() {
  }
}
