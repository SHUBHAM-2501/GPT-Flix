import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {addPopularMovies} from "../utils/movieSlice";
import { useEffect } from "react";

export default function usePopularMovies(){
    const dispatch = useDispatch();

    const nowPopularMovies = useSelector((store)=>store.movies.popularMovies);

     const getPopularMovies = async ()=>{
        const popularMovies = await fetch("https://api.themoviedb.org/3/movie/popular?page=1",API_OPTIONS);
        const movies = await popularMovies.json();
        dispatch(addPopularMovies(movies.results));
     };

     useEffect(()=>{
        !nowPopularMovies && getPopularMovies()
     },[]);
};