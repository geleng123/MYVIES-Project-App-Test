import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';
import moviesData from '../data/moviesData';

// Initial state
const initialState = {
  movies: [],
  watchedMovies: [],
  isOnline: navigator.onLine
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    // Simpan data film ke localStorage jika belum ada
    if (!localStorage.getItem('movies')) {
      localStorage.setItem('movies', JSON.stringify(moviesData));
    }
    // Ambil data film dari localStorage
    const storedMovies = JSON.parse(localStorage.getItem('movies'));
    dispatch({ type: 'SET_MOVIES', payload: storedMovies });

    // Ambil data film yang telah ditonton dari localStorage
    const storedWatchedMovies = JSON.parse(localStorage.getItem('watchedMovies')) || [];
    dispatch({ type: 'SET_WATCHED_MOVIES', payload: storedWatchedMovies });

     // Event listener untuk perubahan status online/offline
    const handleOnline = () => {
      dispatch({ type: 'SET_ONLINE_STATUS', payload: true });
      syncOfflineChanges();
    };

    const handleOffline = () => {
      dispatch({ type: 'SET_ONLINE_STATUS', payload: false });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Actions
  const markAsWatched = (movie) => {
    dispatch({ type: 'MARK_AS_WATCHED', payload: movie });
    saveToLocalStorage(movie, 'add');
  };

  const removeFromWatched = (movie) => {
    dispatch({ type: 'REMOVE_FROM_WATCHED', payload: movie });
    saveToLocalStorage(movie, 'remove');
  };

  const saveToLocalStorage = (movie, action) => {
    const offlineChanges = JSON.parse(localStorage.getItem('offlineChanges')) || [];
    offlineChanges.push({ movie, action });
    localStorage.setItem('offlineChanges', JSON.stringify(offlineChanges));
  };

  const syncOfflineChanges = () => {
    const offlineChanges = JSON.parse(localStorage.getItem('offlineChanges')) || [];
    offlineChanges.forEach(({ movie, action }) => {
      if (action === 'add') {
        dispatch({ type: 'MARK_AS_WATCHED', payload: movie });
      } else if (action === 'remove') {
        dispatch({ type: 'REMOVE_FROM_WATCHED', payload: movie });
      }
    });
    localStorage.removeItem('offlineChanges');
  };

  return (
    <GlobalContext.Provider value={{
      movies: state.movies,
      watchedMovies: state.watchedMovies,
      isOnline: state.isOnline,
      markAsWatched,
      removeFromWatched
    }}>
      {children}
    </GlobalContext.Provider>
  );
};