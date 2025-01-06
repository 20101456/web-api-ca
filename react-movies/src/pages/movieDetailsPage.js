import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getMovieRecommendations } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
// import useMovie from "../hooks/useMovie";   Redundant

const MoviePage = (props) => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  const {
    data: recommendations,
    isLoading: recommendationsLoading,
    isError: recommendationsError,
    error: recommendationsErrorMessage,
  } = useQuery(["recommendations", { id: id }], getMovieRecommendations);

  if (isLoading || recommendationsLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (recommendationsError) {
    return <h1>{recommendationsErrorMessage.message}</h1>
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} recommendations={recommendations.results} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;