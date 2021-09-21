import { MovieCard } from './MovieCard';

interface MovieProps {
  selectedGenre:{
    title:string;
  }
  movies: any;
}

interface movie{
  imdbID: string;
  Title: string;
  Poster: string;
  Runtime: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
}

export function Content(props : MovieProps) {
  // Complete aqui
  return(
    <div className="container">
    <header>
      <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {props.movies.map((movie:movie) => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  );

}