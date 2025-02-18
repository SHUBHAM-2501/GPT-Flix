import { useSelector } from "react-redux";
import MovieList from "./MovieList";

export default function GptMovieSuggestion() {

  const { movieNames, movieResult } = useSelector((store) => store.gpt);
    if (!movieNames || !movieResult) {
      return null;
    }
  return (
    <div className="p-4 m-6 bg-black text-white opacity-90">
    {movieNames.map((movieName, index) => <MovieList key={movieName} title={movieNames[index]}  movies={movieResult[index]} />)}
    
    </div>
  );

}