import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './ListMovie.module.css'

const ListMovie = ({movies}) => {
    return (
        <ul className={css.list}>
            {movies.map((movie) => {
            return (
                <Link 
                key={movie.id} 
                to={`/movies/${movie.id}`}
                >
                <li key={movie.id} className={css.item}>
                    {movie.name ? movie.name : movie.title}
                </li>
                </Link>
            )
        })}
        </ul>
    )
}
export default ListMovie;

ListMovie.propTypes = {
	movies: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string,
		title: PropTypes.string,
	}))
}