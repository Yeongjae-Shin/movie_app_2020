import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;

    if (location.state) {
      return (
        <div className="movies">
          <img
            src={location.state.detailposter}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="movie">
            <h3 className="movie_title">{location.state.title}</h3>
            <h5 className="movie_year">{location.state.year}</h5>
            <ul className="movie_detail_genre">
              {location.state.genres.map((genre, index) => (
                <li key={index} className="detail_genre">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="movie_summary_detail">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
