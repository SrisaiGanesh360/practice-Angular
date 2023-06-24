import { Component } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  movies: any;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getAllMovies();
  }
  getMovies(category:string){
    this.movies = this.movieService.getHorrorMovies;
  }
}
