import { Component, OnInit, OnDestroy } from '@angular/core';
import { TVShow } from '../models/TVShow.model';
import { ActivatedRoute } from '@angular/router';
import { ApiConfigService } from '../services/api-config/api-config.service';
import { Subscription } from 'rxjs';
import { MovieCast } from '../models/MovieCast.model';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  tvShow: TVShow;
  tvShowPosterUrl: string;

  constructor(
    private route: ActivatedRoute,
    private apiConfigService: ApiConfigService
  ) { }

  public getCastMemberImageUrl = (cast: MovieCast) => {
    return this.apiConfigService.getCastProfileUrl(cast.profile_path);
  }

  private setTvShowPosterUrl = () => {
    this.tvShowPosterUrl = this.apiConfigService.getMoviePosterUrl(this.tvShow.poster_path);
  }

  ngOnInit() {
    this.tvShow = this.route.snapshot.data.tvShow;
    this.setTvShowPosterUrl();
  }
}
