import { Component, OnInit } from '@angular/core';
import { TVShow } from '../models/TVShow.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  tvShow: TVShow;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.tvShow = this.route.snapshot.data.tvShow;
  }

}
