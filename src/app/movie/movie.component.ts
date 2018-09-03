import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/Movie.model';
import { ApiConfigService } from '../services/api-config/api-config.service';
import { MovieCast } from '../models/MovieCast.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: Movie;
  moviePosterUrl: string;

  private languageSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private apiConfigService: ApiConfigService
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
}
