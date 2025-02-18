import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

export default function useMovieTrailer(movieId){
    const dispatch = useDispatch();

    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    
  const getMovieVideos = async () => {
    const video = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await video.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  },[]);
}