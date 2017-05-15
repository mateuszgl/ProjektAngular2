import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class MovieService {

  constructor(private http: Http) {
  }

  query(URL: string): Observable<any[]> {
    let queryURL: string = `http://www.omdbapi.com${URL}`;
    return this.http.request(queryURL).map((res: any) => res.json());
  }

  search(query: string): Observable<any[]> {
    return this.query(`/?s=${query}`);
  }

  getMovie(id: string): Observable<any[]> {
    return this.query(`/?i=${id}`);
  }

  checkPoster(URL: string):Observable<any>{
    return this.http.get(URL);
  }

}

export var MOVIE_PROVIDERS: Array<any> = [
  {provide: MovieService, useClass: MovieService}
];
