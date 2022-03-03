import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  private API_KEY: string = '';
  private URI = '';

  private isLoading: boolean;

  constructor(private http: HttpClient) {
    this.URI = `http://www.omdbapi.com?apikey=${this.API_KEY}`;
  }

  getFilmByName(FilmName: string) {
    this.isLoading = true;

    // IMPORTANTE --> ?dato&dato2
    return this.http.get(`${this.URI}&s=${FilmName}&plot=full`);
  }

  getFilmById(id: number) {
    return this.http.get(`${this.URI}&i=${id}`);
  }

  getIsLoading() {
    return this.isLoading;
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }
}
