export default (state, action) => {
    switch (action.type) {
      case 'SET_MOVIES':
        return {
          ...state,
          movies: action.payload
        };
      case 'SET_WATCHED_MOVIES':
        return {
          ...state,
          watchedMovies: action.payload
        };
      case 'MARK_AS_WATCHED':
        // Cek apakah film sudah ada di watched list
        const isAlreadyWatched = state.watchedMovies.some(movie => movie.id === action.payload.id);
        if (isAlreadyWatched) {
            return state;
        }
        const updatedWatchedMovies = [...state.watchedMovies, action.payload];
        localStorage.setItem('watchedMovies', JSON.stringify(updatedWatchedMovies));
        return {
          ...state,
          watchedMovies: updatedWatchedMovies
        };
      case 'REMOVE_FROM_WATCHED':
        const filteredWatchedMovies = state.watchedMovies.filter(movie => movie.id !== action.payload.id);
        localStorage.setItem('watchedMovies', JSON.stringify(filteredWatchedMovies));
        return {
          ...state,
          watchedMovies: filteredWatchedMovies
        };
      default:
        return state;
    }
  };