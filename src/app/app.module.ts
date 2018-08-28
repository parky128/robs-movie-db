import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiConfigService } from './services/api-config.service';
import { SearchModule } from './search/search.module';
import { LanguageModule } from './language/language.module';
import { HomeModule } from './home/home.module';
import { MovieModule } from './movie/movie.module';
import { TvModule } from './tv/tv.module';
import { PersonModule } from './person/person.module';
export function appConfigProvider(apiConfigService: ApiConfigService) {
  return () => apiConfigService.getApiConfig();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    SearchModule,
    HomeModule,
    MovieModule,
    TvModule,
    PersonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        deps: [HttpClient]
      }
    }),
    LanguageModule
  ],
  exports: [TranslateModule],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appConfigProvider, deps: [ApiConfigService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
