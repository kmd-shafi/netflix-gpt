import GPTmoviesuggestion from "./GPTmoviesuggestion";
import GPTsearchbar from "./GPTsearchbar";
import { BG_URL } from "../utils/constants";

const GPTsearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_URL} alt="logo" />
      </div>
      <GPTsearchbar />
      <GPTmoviesuggestion />
    </div>
  );
};

export default GPTsearch;
