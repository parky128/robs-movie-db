import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ApiConfigService } from '../../services/api-config.service';
import { PersonSearchResult } from '../../models/PersonSearchResult.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result-person',
  templateUrl: './search-result-person.component.html',
  styleUrls: ['./search-result-person.component.scss']
})

export class SearchResultPersonComponent implements OnInit {

  @Input() personSearchResult: PersonSearchResult;
  profileUrlPath: string;

  constructor(
    private apiConfigService: ApiConfigService,
    private router: Router
  ) {
  }

  @HostListener('click') onClick() {
    console.log(this.personSearchResult);
    this.router.navigate(['/person/', this.personSearchResult.id]);
  }

  ngOnInit() {
    this.profileUrlPath = this.apiConfigService.getMoviePosterUrl(this.personSearchResult.profile_path);
  }
}
