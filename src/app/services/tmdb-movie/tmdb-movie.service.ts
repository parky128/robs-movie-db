import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LanguageService } from '../language/language.service';

@Injectable({
  providedIn: 'root'
})

export class TmdbMovieService {

  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {
  }

  public getMovie = (id: string) => {
    // const url = `${environment.apiUrl}/${environment.apiVersion}/movie/${id}?api_key=`
    // + `${environment.apiKey}&append_to_response=credits&language=${this.languageService.getLanguage()}`;
    // return this.http.get(url);
      //api_key=${environment.apiKey}&append_to_response=credits&language=${this.languageService.getLanguage()}`);
    return this.http.get('https://api.themoviedb.org/3/movie/123?api=');
  }
}


// public getMovie = (id: string) => {
//   return this.http.get(`${environment.apiUrl}/${environment.apiVersion}/movie/${id}?`);
// }