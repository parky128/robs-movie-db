import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ApiConfigService } from '../../services/api-config.service';
import { TVSearchResult } from '../../models/TvSearchResult.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result-tv',
  templateUrl: './search-result-tv.component.html',
  styleUrls: ['./search-result-tv.component.scss']
})

export class SearchResultTVComponent implements OnInit {

  @Input() tvSearchResult: TVSearchResult;
  posterUrlPath: string;

  constructor(
    private apiConfigService: ApiConfigService,
    private router: Router
  ) {
  }

  @HostListener('click') onClick() {
    console.log(this.tvSearchResult);
    this.router.navigate(['/tv/', this.tvSearchResult.id]);
  }

  ngOnInit() {
    this.posterUrlPath = this.apiConfigService.getMoviePosterUrl(this.tvSearchResult.poster_path);
  }
}
