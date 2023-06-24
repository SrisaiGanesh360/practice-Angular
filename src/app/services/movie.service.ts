import { Injectable } from '@angular/core';
import { ImdbService } from './imdb.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private allMovies = [
    { id: 101, name: '3idiots', producer: 'Rajkumar', category: 'horror' },
    { id: 102, name: 'RRR', producer: 'Rajamouli', category: 'comedy' },
    { id: 101, name: 'KGF', producer: 'Prashant', category: 'thriller' },
  ];

  constructor(private imdbService: ImdbService) {
    this.combinedata();
  }

  private combinedata(){
    const allRatings = this.imdbService.getAllRatings();
    this.allMovies = this.allMovies.map((movie: any) => {
      const ratingobj = allRatings.find(rating => movie.id === rating.id);
      movie ['rating'] = ratingobj?.rating
      return movie;
    });

  }
  getAllMovies(){
    this.combinedata(); 
    return this.allMovies;
  }
  getHorrorMovies(){
    
    return this.allMovies.filter((movie) => movie.category === 'horror');  
  }
}
