import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import Secondrycontainer from "./Secondrycontainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GPTsearch from "./GPTsearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTsearch />
      ) : (
        <>
          <Maincontainer />
          <Secondrycontainer />
        </>
      )}

      {/**
        maincontainer
          -video background
          -video title
        secondarycontainer
          -movie list * n
          -cards *n
         */}
    </div>
  );
};

export default Browse;
