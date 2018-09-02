import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchResultPersonComponent } from '../shared/search-result-person/search-result-person.component';
import { SearchResultTVComponent } from '../shared/search-result-tv/search-result-tv.component';
import { TranslateModule } from '@ngx-translate/core';
import { SearchResultMovieModule } from '../shared/search-result-movie/search-result-movie.module';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    SearchResultMovieModule
  ],
  declarations: [
    SearchComponent,
    SearchResultPersonComponent,
    SearchResultTVComponent
  ],
  exports: [SearchComponent],
  providers: [DatePipe]
})
export class SearchModule { }
