import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function WatchedList() {
  const { watchedMovies, removeFromWatched, isOnline } = useContext(GlobalContext);

  return (
    <div className="container mx-auto p-4">
      <div className="movie-section mb-8">
        <div className="section-header flex items-center mb-4">
          <h2 className="text-2xl font-bold">Watched Movies</h2>
        </div>
        <div className="movie-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {watchedMovies.length > 0 ? (
            watchedMovies.map((movie) => (
              <div key={movie.id} className="movie bg-white shadow-md rounded p-4">
                <button
                  className="remove-button bg-red-500 text-white px-4 py-2 rounded mb-2 hover:bg-red-6000"
                  onClick={() => removeFromWatched(movie)}
                >
                  Remove
                </button>
                <img src={movie.poster} alt={`${movie.title} poster`} className="w-full h-48 object-cover mb-2 rounded"/>
                <h3 className="text-lg font-semibold">{movie.title}</h3>
                <h4 className="text-gray-600">{movie.year}</h4>
              </div>
            ))
          ) : (
            <h2 className="no-movies flex justify-center items-center text-gray-500">Add Some Movies to your Watched List</h2>
          )}
        </div>
      </div>
      {!isOnline && <p className="flex justify-center items-center text-center text-center text-red-500">
        You are currently offline. Changes will be synced when you are back online.</p>}
    </div>
  );
}

export default WatchedList;