import { Component, OnInit, Input, HostListener } from '@angular/core';
import { MovieSearchResult } from '../../models/MovieSearchResult.model';
import { ApiConfigService } from '../../services/api-config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result-movie',
  templateUrl: './search-result-movie.component.html',
  styleUrls: ['./search-result-movie.component.scss']
})

export class SearchResultMovieComponent implements OnInit {
  @Input() movieSearchResult: MovieSearchResult;
  posterUrlPath: string;

  constructor(
    private apiConfigService: ApiConfigService,
    private router: Router
  ) {
  }

  @HostListener('click') onClick() {
    console.log(this.movieSearchResult);
    this.router.navigate(['/movie/', this.movieSearchResult.id]);
  }

  ngOnInit() {
    this.posterUrlPath = this.apiConfigService.getMoviePosterUrl(this.movieSearchResult.poster_path);
  }

  public getDefaultImage = () => {
    this.posterUrlPath = '../../assets/images/powered-by-tmdb.svg';
  }
}
