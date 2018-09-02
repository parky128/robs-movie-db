import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LanguageService } from '../language/language.service';

@Injectable({
  providedIn: 'root'
})

export class TmdbDiscoverService {

  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {
  }

  public movieSearch = (searchTerm: string) => {
    return this.http.get(
      `${environment.apiUrl}/${environment.apiVersion}/discover/movie?api_key=${environment.apiKey}` +
      `&${searchTerm}&language=${this.languageService.getLanguage()}`);
  }
}
