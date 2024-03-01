import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/movieslice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  const UpComingMovies = useSelector((store) => store.movies.upComingMovies);

  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("json", json);
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    !UpComingMovies && getUpComingMovies();
  }, []);
};
export default useUpComingMovies;
