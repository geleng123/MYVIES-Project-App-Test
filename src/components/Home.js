import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Slider from 'react-slick';

function Home() {
  const { movies, watchedMovies, markAsWatched, isOnline } = useContext(GlobalContext);

  // Ambil 14 film pertama untuk ditampilkan dalam 2 baris
  const firstRowMovies = movies.slice(0, 7);
  const secondRowMovies = movies.slice(7, 14); 

  const isWatched = (movieId) => {
    return watchedMovies.some(movie => movie.id === movieId);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  if (!isOnline) {
    return <div className="isOffline flex justify-center items-center text-center text-red-500"><p>This page is not available.</p></div>;
  }

  return (
    <div className="relative">
      <div className="overlay absolute top-2 left-1/2 transform -translate-x-1/2 w-10/12 md:w-8/12 lg:w-7/12 text-white p-4 z-10 rounded-lg shadow-lg">
        <Slider {...sliderSettings}>
          <div>
            <img src="https://via.placeholder.com/1200x400?text=News+1" alt="News 1" className="w-full h-72 object-cover rounded-lg"/>
          </div>
          <div>
            <img src="https://via.placeholder.com/1200x400?text=News+2" alt="News 2" className="w-full h-72 object-cover rounded-lg"/>
          </div>
          <div>
            <img src="https://via.placeholder.com/1200x400?text=News+3" alt="News 3" className="w-full h-72 object-cover rounded-lg"/>
          </div>
          <div>
            <img src="https://via.placeholder.com/1200x400?text=News+4" alt="News 4" className="w-full h-72 object-cover rounded-lg"/>
          </div>
        </Slider>
      </div>
      <div className="newstitle absolute top-72 left-1/2 transform -translate-x-1/2 w-10/12 md:w-8/12 lg:w-7/12 bg-blue-700 text-white p-4 z-10 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Breaking News</h2>
        <p>Marvel Cinematic Universe releases new trailer for upcoming movie!</p>
      </div>

    <div className="container mx-auto p-4 pt-96">
      <div className="movie-section mb-8">
        <div className="section-header flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Marvel Cinematic Universe</h2>
          <button className="more-button text-white px-4 py-2 rounded">More</button>
        </div>
        <div className="movie-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {firstRowMovies.map((movie) => (
            <div key={movie.id} className="movie bg-white shadow-md rounded p-4">
              <button 
                className="watch-button bg-green-500 text-white px-4 py-2 rounded mb-2 hover:bg-green-600 disabled:opacity-50" 
                onClick={() => markAsWatched(movie)}
                disabled={isWatched(movie.id)}
              > 
                {isWatched(movie.id) ? 'Watched' : 'Add to Watched'}
              </button>
              <img src={movie.poster} alt={`${movie.title} poster`} className="w-full h-auto mb-2 rounded"/>
              <h3 className="text-lg font-semibold">{movie.title}</h3>
              <h4 className="text-gray-600">{movie.year}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="movie-section">
        <div className="section-header flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">New In Cinema</h2>
          <button className="more-button text-white px-4 py-2 rounded">More</button>
        </div>
        <div className="movie-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {secondRowMovies.map((movie) => (
            <div key={movie.id} className="movie bg-white shadow-md rounded p-4">
              <button
                className="watch-button bg-green-500 text-white px-4 py-2 rounded mb-2 hover:bg-green-600 disabled:opacity-50"
                onClick={() => markAsWatched(movie)}
                disabled={isWatched(movie.id)}
              >
                {isWatched(movie.id) ? 'Watched' : 'Add to Watched'}
              </button>
              <img src={movie.poster} alt={`${movie.title} poster`} className="w-full h-auto mb-2 rounded"/>
              <h3 className="text-lg font-semibold">{movie.title}</h3>
              <h4 className="text-gray-600">{movie.year}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;