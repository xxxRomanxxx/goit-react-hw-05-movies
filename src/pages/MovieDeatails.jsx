import { useEffect, useState, Suspense } from 'react';
import { fetchMovieDetail } from "Api/Api";
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import Back from 'components/Back/Back';
import css from './page.module.css'





const MovieDetails = () => {
    const [movies, setMovies] = useState({});
    const [error, setError] = useState('');
    const {movieId} = useParams();

    const location = useLocation();
    const backPath = location.state?.from ?? '/';

    useEffect(() => {
        async function fetchMovies() {
            const results = await fetchMovieDetail(movieId);
            setMovies(results);
        }
        fetchMovies().catch((error) => {
          setError('Sorry, something went wrong...');
          console.error(error);
        });
      }, [movieId]);

    return (
        <div className={css.container}>
            <Back to={backPath}/>
       {error ? (
        <p>{error}</p>
      ) : (
        <MovieInfo
        title={movies.original_title}
        poster={movies.poster_path}
        vote={movies.vote_average}
        overview={movies.overview}
        genres={movies.genres}
        />)}
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast" state={{from: backPath}}>Cast</Link>
          </li>
          <li>
            <Link to="reviews" state={{from: backPath}}>Reviews</Link>
          </li>
        </ul>
        <Suspense>
          <Outlet />
        </Suspense>
        </div>
    )
  }
  
  export default MovieDetails;