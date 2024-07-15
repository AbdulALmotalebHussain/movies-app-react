import React, { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './css/MovieAction.css';
import MovieCard from './MovieCard';

const movies = [
  { image: 'https://filmdb.landmarkcinemas.com/FilmImages/22/1/125004/TwisterPosterOfficial.jpg' },
  { image: 'https://images.mid-day.com/images/images/2023/may/bloddydaddmainposter_d.jpg' },
  { image: 'https://lionsgate.brightspotcdn.com/12/81/eddb72924ad4965f25deed3c61d2/the-ministry-of-ungentlemanly-warfare-movies-he-promo-large-01.jpg' },
  { image: 'https://www.myvue.com/-/jssmedia/vuecinemas/img/import/c8037d2d-f30d-4100-9dd6-3c9fd60fd306_furiosa_posters_main-one-sheet_712px.jpg' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQyEU3iB2gkwX78VoS09jMSx6ZY2eVmIyf_g&s' },
  { image: 'https://images.mid-day.com/images/images/2023/may/leomaineposter_d.jpg' },
  { image: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2024/02/Devara.jpg' },
  { image: 'https://filmdb.landmarkcinemas.com/FilmImages/22/1/125004/TwisterPosterOfficial.jpg' },
  { image: 'https://images.mid-day.com/images/images/2023/may/bloddydaddmainposter_d.jpg' },
  { image: 'https://lionsgate.brightspotcdn.com/12/81/eddb72924ad4965f25deed3c61d2/the-ministry-of-ungentlemanly-warfare-movies-he-promo-large-01.jpg' },
  { image: 'https://www.myvue.com/-/jssmedia/vuecinemas/img/import/c8037d2d-f30d-4100-9dd6-3c9fd60fd306_furiosa_posters_main-one-sheet_712px.jpg' },
  { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQyEU3iB2gkwX78VoS09jMSx6ZY2eVmIyf_g&s' },
  { image: 'https://images.mid-day.com/images/images/2023/may/leomaineposter_d.jpg' },
  { image: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2024/02/Devara.jpg' },

];

const MovieList: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const childWidth = containerRef.current.children[0].clientWidth;
      containerRef.current.scrollTo({ left: childWidth * index, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : movies.length - 1));
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex < movies.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  return (
    <div className="movie-action">
      <h2>Action Movies</h2>
      <div className="movie-action-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>
        <div className="movie-action-right" ref={containerRef}>
          {movies.map((movie, index) => (
            <MovieCard key={index} image={movie.image} />
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default MovieList;
