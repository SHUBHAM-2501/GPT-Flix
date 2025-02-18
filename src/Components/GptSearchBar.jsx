import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import openAi from "../utils/openAi";
import { useRef } from "react";
import { addGptMovieResults } from "../utils/GptSlice";

export default function GptSearchBar() {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    
    const searchMovieNameTMDB = async (movie) => {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      return json.results;
    };


    const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const Gptresult = await openAi.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });

      if (!Gptresult?.choices) {
        console.error("No choices returned from GPT-3.5-turbo");
        return;
        
      }

      const gptMovies = Gptresult?.choices[0]?.message?.content.split(",");

      const promiseArray = gptMovies.map((movie) => searchMovieNameTMDB(movie));
  
      const tmdbResults = await Promise.all(promiseArray);
  

      dispatch(addGptMovieResults({movieNames:gptMovies,movieResult:tmdbResults}));


    };


  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 text-white opacity-80"
        onSubmit={(event) => event.preventDefault()}
      > 
       <input
        ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder="Search what you would like to watch"
        />
         <button onClick={handleGptSearchClick}
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg hover:cursor-pointer"
        >
          Search
        </button>
        </form>
      
    </div>
  );
}
