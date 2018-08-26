import { Component, OnInit, Input } from '@angular/core';
import { ApiConfigService } from '../../services/api-config.service';
import { TVSearchResult } from '../../models/TvSearchResult.model';

@Component({
  selector: 'app-search-result-tv',
  templateUrl: './search-result-tv.component.html',
  styleUrls: ['./search-result-tv.component.scss']
})

export class SearchResultTVComponent implements OnInit {

  @Input() tvSearchResult: TVSearchResult;
  posterUrlPath: string;

  constructor(private apiConfigService: ApiConfigService) {
  }

  ngOnInit() {
    this.posterUrlPath = this.apiConfigService.getMoviePosterUrl(this.tvSearchResult.poster_path);
  }
}
