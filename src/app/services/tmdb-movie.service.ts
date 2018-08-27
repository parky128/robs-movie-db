import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TmdbMovieService {

  constructor(private http: HttpClient) {
  }

  public getMovie = (id: string) => {
    return this.http.get(`${environment.apiUrl}/${environment.apiVersion}/movie/${id}?api_key=${environment.apiKey}`);
  }
}
