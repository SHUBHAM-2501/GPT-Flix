import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";

export default function Browser() {
 
  const showGptPage = useSelector((store) => store.gpt.showGptPage);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
      <>
      <Header />
      {
        showGptPage ? (<GptSearch /> ):( <>
          <MainContainer />
          <SecondaryContainer />
          </>
     ) }
  </>
  );
}
