import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TmdbPersonService {

  constructor(private http: HttpClient) {
  }

  public getPerson = (id: string) => {
    return this.http.get(
      `${environment.apiUrl}/${environment.apiVersion}/person/${id}` +
        `?api_key=${environment.apiKey}&append_to_response=movie_credits,tv_credits`
    );
  }
}
