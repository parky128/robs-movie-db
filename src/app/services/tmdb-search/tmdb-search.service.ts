import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LanguageService } from '../language/language.service';

@Injectable({
  providedIn: 'root'
})

export class TmdbSearchService {

  constructor(
    private http: HttpClient,
    private languageService: LanguageService
  ) {
  }

  public performSearch = (searchTerm: string) => {
    return this.http.get(
      `${environment.apiUrl}/${environment.apiVersion}/search/multi?api_key=${environment.apiKey}` +
      `&query=${searchTerm}&language=${this.languageService.getLanguage()}`);
  }
}
