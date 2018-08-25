import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfigModel } from '../models/apiConfig.model';

@Injectable({
  providedIn: 'root'
})

export class ApiConfigService {

  public apiConfig: ApiConfigModel;

  constructor(private http: HttpClient) {
  }

  public getApiConfig = () => {
    return this.http.get('https://api.themoviedb.org/3/configuration?api_key=7b157a93d615cd3ca2b3312055fa550c')
      .toPromise()
      .then((apiConfigResponse: ApiConfigModel) => {
        this.apiConfig = apiConfigResponse;
      });
  }
}
