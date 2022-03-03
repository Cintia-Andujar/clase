import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [],
})
export class DetailComponent implements OnInit {
  private id: number;

  public title: string;
  public year: number;
  public duration: string;
  public genre: any = [];
  public director: string;
  public actors: any = [];
  public plot: string;
  public country: string;
  public url: string;
  public rating: number;
  public poster: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private CinemaService: CinemaService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) => {
      this.id = res['id'];
    });

    this.getFilmById();
  }

  getFilmById() {
    return this.CinemaService.getFilmById(this.id).subscribe((res: any) => {
      this.title = res.Title;
      this.year = res.Year;
      this.duration = res.Runtime;
      this.genre.push(res.Genre);
      this.director = res.Director;
      this.actors.push(res.Actors);
      this.plot = res.Plot;
      this.country = res.Country;
      this.url = `https://www.imdb.com/title/${res.imdbID}`;
      this.rating = res.imdbRating;
      this.poster = res.Poster;
    });
  }

  getGeneros() {
    return this.genre;
  }

  getActors() {
    return this.actors;
  }
}
