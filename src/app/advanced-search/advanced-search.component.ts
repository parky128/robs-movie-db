import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { TmdbSearchService } from '../services/tmdb-search/tmdb-search.service';
import { PersonSearchResult } from '../models/PersonSearchResult.model';
import { SearchResults } from '../models/SearchResults.model';
import { MovieSearchResult } from '../models/MovieSearchResult.model';
import { TVSearchResult } from '../models/TVSearchResult.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre } from '../models/Genre.model';
import { TmdbDiscoverService } from '../services/tmdb-discover/tmdb-discover.service';
import { Movie } from '../models/Movie.model';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {

  personSearchResults: Array<MovieSearchResult | PersonSearchResult | TVSearchResult> = [];
  selectedPersons: Array<PersonSearchResult> = [];
  genres: Array<Genre> = [];
  search = new FormControl();
  movieSearchResults: SearchResults;

  private selectedGenres: Array<Genre> = [];
  private searchTerm = '';

  constructor(
    private tmdbSearch: TmdbSearchService,
    private tmdbDiscover: TmdbDiscoverService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  public addSelectedPerson = (person: PersonSearchResult) => {
    this.clearSearch();
    this.selectedPersons.push(person);
  }

  public removeSelectedPerson = (person: PersonSearchResult) => {
    this.selectedPersons.splice(this.selectedPersons.indexOf(person), 1);
  }

  public clearSearch = () => {
    this.search.setValue('');
  }

  public performSearch = () => {
    const searchTerms: Array<string> = [];
    const personIds = this.selectedPersons.map(person => {
      return person.id;
    }).join();
    searchTerms.push(`with_cast=${personIds}`);

    const genreIds = this.selectedGenres.map(genre => {
      return genre.id;
    }).join();
    searchTerms.push(`with_genres=${genreIds}`);
    this.searchTerm = searchTerms.join('&');
    this.tmdbDiscover.movieSearch(this.searchTerm).subscribe((searchResults: SearchResults) => {
      this.movieSearchResults = searchResults;
    });
  }

  public setGenres = (genre: Genre) => {

    const recIndex = this.selectedGenres.indexOf(genre);
    if (recIndex > -1) {
      this.selectedGenres.splice(recIndex, 1);
    } else {
      this.selectedGenres.push(genre);
    }
    console.log(this.selectedGenres);
  }

  public goToMovie = (movie: MovieSearchResult) => {
    this.router.navigateByUrl(`/movie/${movie.id}`);
  }

  public getResultsPage = (page: number) => {
    console.log(page)
    this.searchTerm += `&page=${page}`;
    this.tmdbDiscover.movieSearch(this.searchTerm).subscribe((searchResults: SearchResults) => {
      this.movieSearchResults = searchResults;
    });
  }

  private searchPersons = (searchText: string) => {
    this.tmdbSearch.personSearch(searchText).toPromise().then((response: SearchResults) => {
      this.personSearchResults = response.results;
    });
  }

  ngOnInit() {
    this.genres = this.route.snapshot.data.genres.genres;

    this.search.valueChanges.pipe(
      debounceTime(300)
    ).subscribe((searchText: string) => {
      if (searchText.length > 0) {
        this.searchPersons(searchText);
      } else {
        this.personSearchResults = [];
      }
    });
  }

}
