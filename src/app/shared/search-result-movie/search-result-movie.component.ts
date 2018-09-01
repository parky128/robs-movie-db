import { Component, OnInit, Input, HostListener } from '@angular/core';
import { MovieSearchResult } from '../../models/MovieSearchResult.model';
import { ApiConfigService } from '../../services/api-config/api-config.service';

@Component({
  selector: 'app-search-result-movie',
  templateUrl: './search-result-movie.component.html',
  styleUrls: ['./search-result-movie.component.scss']
})

export class SearchResultMovieComponent implements OnInit {
  @Input() movieSearchResult: MovieSearchResult;
  posterUrlPath: string;

  constructor(
    private apiConfigService: ApiConfigService
  ) {
  }

  ngOnInit() {
    this.posterUrlPath = this.apiConfigService.getSearchResultImageUrl(this.movieSearchResult.poster_path);
  }

  public getDefaultImage = () => {
    this.posterUrlPath = '../../assets/images/powered-by-tmdb.svg';
  }
}
