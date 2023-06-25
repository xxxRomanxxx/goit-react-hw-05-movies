import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMoviesSearchQuery } from "Api/Api";
import SearchQuery from "components/SearchQuery/SearchQuery";
import ListMovie from "components/ListMovie/ListMovie";
import css from './page.module.css'

const Movies = () => {

const [searchParams, setSearchParams] = useSearchParams();
const query = searchParams.get('query');

const [movies, setMovies] = useState([]);
	const [error, setError] = useState('');

  useEffect(() => {
    async function fetchMovies() {
      const results = await fetchMoviesSearchQuery(query);
      setMovies(results);
    }
    fetchMovies().catch((error) => {
      setError('Sorry, something went wrong...');
      console.error(error);
    });

  }, [query]);

  const getSearchQuery = (searchQuery) => {
    setSearchParams({query: searchQuery});
  }

  return (
    <div className={css.container}>
       <SearchQuery 
       onSubmit={getSearchQuery} 
       searchQuery={query}
       />
       {error ? (
        <p>{error}</p>
      ) : (
        <ListMovie movies={movies} />
      )}
    </div>
  )
}

export default Movies;