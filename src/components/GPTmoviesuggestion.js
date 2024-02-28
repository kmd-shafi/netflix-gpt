import { useSelector } from "react-redux";
import Movielist from "./Movielist";

const GPTmoviesuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, MovieNames } = gpt;
  if (!MovieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {MovieNames.map((MovieName, index) => (
          <Movielist
            key={MovieName}
            title={MovieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTmoviesuggestion;
