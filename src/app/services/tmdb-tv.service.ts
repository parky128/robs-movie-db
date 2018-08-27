import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TmdbTvService {

  constructor(private http: HttpClient) {
  }

  public getTv = (id: string) => {
    return this.http.get(
      `${environment.apiUrl}/${environment.apiVersion}/tv/${id}?` +
      `api_key=${environment.apiKey}&append_to_response=credits`);
  }
}
