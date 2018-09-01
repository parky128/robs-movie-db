import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TmdbSearchService } from '../services/tmdb-search/tmdb-search.service';
import { debounceTime } from 'rxjs/operators';
import { SearchResults } from '../models/SearchResults.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieSearchResult } from '../models/MovieSearchResult.model';
import { PersonSearchResult } from '../models/PersonSearchResult.model';
import { TVSearchResult } from '../models/TVSearchResult.model';
import { LanguageService } from '../services/language/language.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit, OnDestroy {

  search = new FormControl();
  searchResults: Array<any> = [];

  private languageSubscription: Subscription;

  constructor(
    private tmdbSearch: TmdbSearchService,
    private router: Router,
    private languageService: LanguageService
  ) { }

  public clearSearch = () => {
    this.search.setValue('');
  }

  public goToMovie = (movie: MovieSearchResult) => {
    this.router.navigateByUrl(`/movie/${movie.id}`);
  }
  public goToPerson = (person: PersonSearchResult) => {
    this.router.navigateByUrl(`/person/${person.id}`);
  }
  public goToTVShow = (tv: TVSearchResult) => {
    this.router.navigateByUrl(`/tv/${tv.id}`);
  }

  private performSearch = (searchText: string) => {
    this.tmdbSearch.performSearch(searchText).toPromise().then((response: SearchResults) => {
      this.searchResults = response.results;
    });
  }

  ngOnInit() {
    this.search.valueChanges.pipe(
      debounceTime(300)
    ).subscribe((searchText: string) => {
      if (searchText.length > 0) {
        this.performSearch(searchText);
      } else {
        this.searchResults = [];
      }
    });
  }

  ngAfterViewInit() {
    this.languageSubscription = this.languageService.selectedLanguage.subscribe(() => {
      if (this.search.value) {
        this.performSearch(this.search.value);
      } else {
        this.searchResults = [];
      }
    });
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

}
