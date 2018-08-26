import { Component, OnInit, Input } from '@angular/core';
import { MovieSearchResult } from '../../models/MovieSearchResult.model';
import { ApiConfigService } from '../../services/api-config.service';

@Component({
  selector: 'app-search-result-movie',
  templateUrl: './search-result-movie.component.html',
  styleUrls: ['./search-result-movie.component.scss']
})

export class SearchResultMovieComponent implements OnInit {
  @Input() movieSearchResults: MovieSearchResult;
  posterUrlPath: string;

  constructor(private apiConfigService: ApiConfigService) {
  }

  ngOnInit() {
    this.posterUrlPath = this.apiConfigService.getMoviePosterUrl(this.movieSearchResults.poster_path);
  }

  public getDefaultImage = () => {
    this.posterUrlPath = '../../assets/images/powered-by-tmdb.svg';
  }
}
