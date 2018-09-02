import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieSearchResult } from '../models/MovieSearchResult.model';
import { TVSearchResult } from '../models/TVSearchResult.model';
import { ApiConfigService } from '../services/api-config/api-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies: Array<MovieSearchResult> = [];
  trendingShows: Array<TVSearchResult> = [];

  constructor(
    private route: ActivatedRoute,
    private apiConfigService: ApiConfigService
  ) { }

  public posterUrlPath = (movie) => {
    this.apiConfigService.getSearchResultImageUrl(movie.poster_path);
  }

  ngOnInit() {
    this.trendingMovies = this.route.snapshot.data.trendingMovies;
    this.trendingShows = this.route.snapshot.data.trendingShows;
  }

}
