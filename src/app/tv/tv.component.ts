import { Component, OnInit } from '@angular/core';
import { TVShow } from '../models/TVShow.model';
import { ActivatedRoute } from '@angular/router';
import { ApiConfigService } from '../services/api-config.service';

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

  ngOnInit() {
    this.tvShow = this.route.snapshot.data.tvShow;
    this.tvShowPosterUrl = this.apiConfigService.getMoviePosterUrl(this.tvShow.poster_path);
  }

}
