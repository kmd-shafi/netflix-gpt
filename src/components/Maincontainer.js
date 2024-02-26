import { useSelector } from "react-redux";
import Videotitle from "./Videotitle";
import Videobackground from "./Videobackground";

const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainmovies = movies[0];

  const { original_title, overview, id } = mainmovies;

  return (
    <div>
      <Videotitle title={original_title} overview={overview} />
      <Videobackground movieId={id} />
    </div>
  );
};

export default Maincontainer;
