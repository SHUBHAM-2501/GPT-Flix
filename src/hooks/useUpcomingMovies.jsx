import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export default function useUpcomingMovies(){
    const dispatch = useDispatch();

    const UpcomingMovies = useSelector((store)=>store.movies.upcomingMovies);

    const getUpcomingMovies = async()=>{
        const upcomingMovies = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",API_OPTIONS);
         const movies = await upcomingMovies.json();
         dispatch(addUpcomingMovies(movies.results)); 
    };

    useEffect(()=>{
        !UpcomingMovies && getUpcomingMovies()
    },[]);

}