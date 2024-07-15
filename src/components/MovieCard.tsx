import React from 'react';
import './css/MoveListe.css';

interface MovieCardProps {
  image: string;
  onClick: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ image , onClick }) => {
  return (
    <div className="movie-card" onClick={onClick}>
      <img src={image} alt={ 'Movie'} />
      {  <div className="movie-">{}</div>}
    </div>
  );
};

export default MovieCard;
