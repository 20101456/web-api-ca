import React from "react";
import Movie from "../movieCard";
import Grid from "@mui/material/Grid2";

const RecommendedMovies = ({ movies, action }) => {
  const movieCards = movies.map((movie) => (
    <Grid key={movie.id} size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} sx={{ padding: "20px" }}>
      <Movie movie={movie} action={action} />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {movieCards}
    </Grid>
  );
};

export default RecommendedMovies;