import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TmdbSearchService {

  //public apiConfig: ApiConfigModel;

  constructor(private http: HttpClient) {
  }

  public performSearch = (searchTerm: string) => {
    return this.http.get('https://api.themoviedb.org/3/search/multi?api_key=7b157a93d615cd3ca2b3312055fa550c&query=' + searchTerm);
      // .toPromise()
      // .then((apiConfigResponse: ApiConfigModel) => {
      //   this.apiConfig = apiConfigResponse;
      // });
  }
}
