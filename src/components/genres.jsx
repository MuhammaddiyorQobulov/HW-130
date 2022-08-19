import { Link } from "react-router-dom";

const Genres = ({ genres = [], genreID, onSelect }) => {
  const { pathname } = window.location;
  return (
    <div className="col-2">
      <ul className="list-group" style={{ listStyle: "none" }}>
        {genres.map((genre) => (
          <li key={genre._id}>
            <Link
              to={`/${genre.name}`}
              className={`list-group-item ${
                pathname === `/${genre.name}` && "active"
              }`}
              style={{ cursor: "pointer" }}
              onClick={() => onSelect(genre._id)}
            >
              {genre.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
