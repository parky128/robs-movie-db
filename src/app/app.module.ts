import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ApiConfigService } from './services/api-config.service';
import { SearchComponent } from './search/search.component';

export function appConfigProvider(apiConfigService: ApiConfigService) {
  return () => apiConfigService.getApiConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatIconModule
  ],

  providers: [
    { provide: APP_INITIALIZER, useFactory: appConfigProvider, deps: [ApiConfigService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
