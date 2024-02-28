import { IMG_CDN_URL } from "../utils/constants";

const Moviecard = ({ posterParth }) => {
  if (!posterParth) return null;
  return (
    <div className="w-48 pr-4">
      <img alt="movie card" src={IMG_CDN_URL + posterParth} />
    </div>
  );
};

export default Moviecard;
