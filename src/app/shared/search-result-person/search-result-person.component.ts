import { Component, OnInit, Input } from '@angular/core';
import { ApiConfigService } from '../../services/api-config.service';
import { PersonSearchResult } from '../../models/PersonSearchResult.model';

@Component({
  selector: 'app-search-result-person',
  templateUrl: './search-result-person.component.html',
  styleUrls: ['./search-result-person.component.scss']
})

export class SearchResultPersonComponent implements OnInit {

  @Input() personSearchResult: PersonSearchResult;
  profileUrlPath: string;

  constructor(private apiConfigService: ApiConfigService) {
  }

  ngOnInit() {
    this.profileUrlPath = this.apiConfigService.getMoviePosterUrl(this.personSearchResult.profile_path);
  }
}
