import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { INormalizedFilm } from '../../../config/interface';

function Film({ film }: { film: INormalizedFilm }) {
  return (
    <Card sx={{ width: 730 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 1.5 }}>
          {film.title}
        </Typography>
        <Typography color="text.secondary" component="div">
          Release date: {film.release_date}
        </Typography>
        <Typography color="text.secondary">Director: {film.director}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Producer: {film.producer}
        </Typography>
        <Typography variant="body2">{film.opening_crawl}</Typography>
      </CardContent>
    </Card>
  );
}

export default Film;
