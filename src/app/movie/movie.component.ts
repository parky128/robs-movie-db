import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/Movie.model';
import { ApiConfigService } from '../services/api-config/api-config.service';
import { MovieCast } from '../models/MovieCast.model';
import { Subscription } from 'rxjs';
import { LanguageService } from '../services/language/language.service';
import { TmdbMovieService } from '../services/tmdb-movie/tmdb-movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, AfterViewInit, OnDestroy {

  movie: Movie;
  moviePosterUrl: string;

  private languageSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private apiConfigService: ApiConfigService,
    private languageService: LanguageService,
    private tmdbMovieService: TmdbMovieService
  ) {
  }

  public getCastMemberImageUrl = (cast: MovieCast) => {
    return this.apiConfigService.getCastProfileUrl(cast.profile_path);
  }

  private setMoviePosterUrl = () => {
    this.moviePosterUrl = this.apiConfigService.getMoviePosterUrl(this.movie.poster_path);
  }

  ngOnInit() {
    this.movie = this.route.snapshot.data.movie;
    this.setMoviePosterUrl();
  }

  ngAfterViewInit() {
    this.languageSubscription = this.languageService.selectedLanguage.subscribe(selectedLanguage => {
      this.tmdbMovieService.getMovie(this.route.snapshot.paramMap.get('id')).subscribe((movie: Movie) => {
        this.movie = movie;
        this.setMoviePosterUrl();
      });
    });
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

}
