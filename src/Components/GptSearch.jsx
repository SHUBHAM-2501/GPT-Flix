import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constants";

export default function GptSearch() {
  return (
    <>
    <div className="fixed -z-10">
        <img className="h-screen w-screen object-cover" src={BG_URL} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </>
  );
}