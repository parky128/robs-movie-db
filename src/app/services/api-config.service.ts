import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIConfigModel } from '../models/APIConfig.model';

@Injectable({
  providedIn: 'root'
})

export class ApiConfigService {

  public apiConfig: APIConfigModel;

  constructor(private http: HttpClient) {
  }

  public getApiConfig = () => {
    return this.http.get('https://api.themoviedb.org/3/configuration?api_key=7b157a93d615cd3ca2b3312055fa550c')
      .toPromise()
      .then((apiConfigResponse: APIConfigModel) => {
        this.apiConfig = apiConfigResponse;
      });
  }

  public getSearchResultImageUrl = (imagePath: string) => {
    return `${this.apiConfig.images.base_url}w92/${imagePath}`;
  }

  public getMoviePosterUrl = (imagePath: string) => {
    return `${this.apiConfig.images.base_url}w185/${imagePath}`;
  }

  public getPersonProfileUrl = (imagePath: string) => {
    return `${this.apiConfig.images.base_url}w185${imagePath}`;
  }

  public getCastProfileUrl = (imagePath: string) => {
    return `${this.apiConfig.images.base_url}w45${imagePath}`;
  }
}
