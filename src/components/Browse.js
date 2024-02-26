import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import Secondrycontainer from "./Secondrycontainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <Maincontainer />
      <Secondrycontainer />
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
