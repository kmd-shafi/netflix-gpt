import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const Secondrycontainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-52 pl-12 relative z-2">
          <Movielist title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <Movielist
            title={"Trending Movies"}
            movies={movies?.nowPlayingMovies}
          />
          <Movielist title={"popular"} movies={movies?.PopularMovies} />
          <Movielist
            title={"Upcoming Movies"}
            movies={movies?.nowPlayingMovies}
          />
          <Movielist
            title={"Horror Movies"}
            movies={movies?.nowPlayingMovies}
          />
        </div>
      </div>
    )
  );
};

export default Secondrycontainer;
