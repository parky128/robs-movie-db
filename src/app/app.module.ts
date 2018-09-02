import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { MatToolbarModule, MatProgressSpinnerModule } from '@angular/material';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiConfigService } from './services/api-config/api-config.service';
import { SearchModule } from './search/search.module';
import { LanguageModule } from './language/language.module';
import { HomeModule } from './home/home.module';
import { MovieModule } from './movie/movie.module';
import { TvModule } from './tv/tv.module';
import { PersonModule } from './person/person.module';
import { APIRequestInterceptorService } from './services/api-request-interceptor/api-request-interceptor.service';
import { AdvancedSearchModule } from './advanced-search/advanced-search.module';

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
    MatProgressSpinnerModule,
    SearchModule,
    HomeModule,
    MovieModule,
    TvModule,
    PersonModule,
    AdvancedSearchModule,
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
    { provide: APP_INITIALIZER, useFactory: appConfigProvider, deps: [ApiConfigService], multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: APIRequestInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
