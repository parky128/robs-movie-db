import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/Movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: Movie;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.movie = this.route.snapshot.data.movie;
  }

}
