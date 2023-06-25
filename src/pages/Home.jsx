import { useEffect, useState } from 'react';
import {fetchGetTraiding} from '../Api/Api'
import ListMovie from 'components/ListMovie/ListMovie';
import css from './page.module.css'


const Home = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchMovies() {
            const results = await fetchGetTraiding();
            setMovies(results);
        }
        fetchMovies().catch((error) => {
          setError('Sorry, something went wrong...');
          console.error(error);
        });
      }, []);

    return (
        <div className={css.container}>
        <h2 className={css.title}>Trending today</h2>
        {error ? (
        <p>{error}</p>
      ) : (
         <ListMovie movies = {movies}/>
      )};
        </div>
      
    )
  }
  
  export default Home;