import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { IFilm } from '../model/IFilm.interface';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private url: string = '';
  private apiKey: string = '84dd8255';

  constructor(private http: HttpClient) {}

  searchFilms(title: string) {
    this.url =
      `https://www.omdbapi.com/?s=${encodeURI(title)}&type=movie&apikey=${this.apiKey}`;
    console.log(this.url);
    return this.http
      .get<IFilm>(this.url)
      .pipe(map((results) => results['Search']));
  }

  getInfo(id: string) {
    return this.http.get<IFilm>(
      `https://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`
    );
  }
}
