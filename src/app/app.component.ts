import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ApiConfigService } from './services/api-config.service';
import { TmdbSearchService } from './services/tmdb-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-tmdb-app'; //translate this?!

  constructor(
  ) {

  }

  ngOnInit() {
  }
}
