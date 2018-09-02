import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatIconModule,
  MatChipsModule,
  MatCheckboxModule,
  MatButtonModule,
  MatListModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvancedSearchComponent } from './advanced-search.component';
import { AdvancedSearchRoutingModule } from './advanced-search-routing.module';
import { SearchResultMovieModule } from '../shared/search-result-movie/search-result-movie.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    AdvancedSearchRoutingModule,
    TranslateModule,
    SearchResultMovieModule
  ],
  declarations: [
    AdvancedSearchComponent
  ],
  exports: [AdvancedSearchComponent]
})
export class AdvancedSearchModule { }
