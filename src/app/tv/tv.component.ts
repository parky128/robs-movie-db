import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { TVShow } from '../models/TVShow.model';
import { ActivatedRoute } from '@angular/router';
import { ApiConfigService } from '../services/api-config.service';
import { LanguageService } from '../services/language.service';
import { TmdbTvService } from '../services/tmdb-tv.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit, AfterViewInit, OnDestroy {

  tvShow: TVShow;
  tvShowPosterUrl: string;

  private languageSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private apiConfigService: ApiConfigService,
    private languageService: LanguageService,
    private tmdbTvService: TmdbTvService
  ) { }

  private setTvShowPosterUrl = () => {
    this.tvShowPosterUrl = this.apiConfigService.getMoviePosterUrl(this.tvShow.poster_path);
  }

  ngOnInit() {
    this.tvShow = this.route.snapshot.data.tvShow;
    this.setTvShowPosterUrl();
  }

  ngAfterViewInit() {
    this.languageSubscription = this.languageService.selectedLanguage.subscribe(selectedLanguage => {
      this.tmdbTvService.getTv(this.route.snapshot.paramMap.get('id')).subscribe((tvShow: TVShow) => {
        this.tvShow = tvShow;
        this.setTvShowPosterUrl();
      });
    });
  }

  ngOnDestroy() {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

}
