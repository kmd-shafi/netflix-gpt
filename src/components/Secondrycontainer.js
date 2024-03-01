import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const Secondrycontainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-52 pl-12 relative z-20">
          <Movielist title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <Movielist title={"TopRated"} movies={movies?.topRatedMovies} />
          <Movielist title={"popular"} movies={movies?.popularMovies} />
          <Movielist title={"Upcoming"} movies={movies?.upComingMovies} />
        </div>
      </div>
    )
  );
};

export default Secondrycontainer;
