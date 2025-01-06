import React from "react";
import { getNowPlaying } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch";

const NowPlayingMoviesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('now_playing', getNowPlaying)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const mustWatch = movies.filter(m => m.mustWatch)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))
  const addToMustWatch = (movieId) => true 

  return (
    <PageTemplate
      title="Now Playing"
      movies={movies}
      action={(movie) => {
        return <AddToMustWatchIcon movie={movie} />
      }}
    />
);
};
export default NowPlayingMoviesPage;