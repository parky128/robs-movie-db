import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatListModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SearchResultMovieModule } from '../shared/search-result-movie/search-result-movie.module';
import { SearchResultTVModule } from '../shared/search-result-tv/search-result-tv.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    TranslateModule,
    RouterModule,
    SearchResultMovieModule,
    SearchResultTVModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
