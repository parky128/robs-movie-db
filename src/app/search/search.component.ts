import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TmdbSearchService } from '../services/tmdb-search.service';
import { debounceTime } from 'rxjs/operators';
import { SearchResults } from '../models/SearchResults.model';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search = new FormControl();
  searchResults: Array<any> = [];

  constructor(
    private tmdbSearch: TmdbSearchService
  ) { }

  public goToResult = (event: MatAutocompleteSelectedEvent) => {
    console.log(event.option.value);
    this.clearSearch();
  }

  public clearSearch = () => {
    this.search.setValue('');
  }

  ngOnInit() {
    this.search.valueChanges.pipe(
      debounceTime(300)
    ).subscribe((searchText: string) => {
      console.log(searchText);
      if(searchText.length > 0) {
        this.tmdbSearch.performSearch(searchText).toPromise().then((response: SearchResults) => {
          console.log(response.results);
          this.searchResults = response.results;
        });
      } else {
        this.searchResults = [];
      }
    });
  }

}
