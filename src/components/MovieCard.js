import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Star } from '@mui/icons-material';

function MovieCardView(props) {
  const movie = props.movie;

  return (
    <Link style={{ textDecoration: 'none' }} to={`/Movielist/${movie.title}`} state={movie} >
      <Card className="movie-card custom-card">
        <div className="card-img-overlay">
          <Badge bg="secondary" className="rating-badge">
            <Star fontSize="small" />
            {movie.rating}
          </Badge>
        </div>
        <Card.Img variant="top" src={movie.posterURL} alt={movie.title} />
        <Card.Body>
          <Card.Title className="text-success">{movie.title}</Card.Title>
          <Card.Text className="description-color">
            {movie.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default MovieCardView;
