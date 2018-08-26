import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TmdbPersonService {

  constructor(private http: HttpClient) {
  }

  public getPerson = (id: string) => {
    return this.http.get(`https://api.themoviedb.org/3/person/${id}?api_key=7b157a93d615cd3ca2b3312055fa550c`);
  }
}
