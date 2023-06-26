import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './ListMovie.module.css'

const ListMovie = ({movies}) => {
    const location = useLocation();
    return (
        <ul className={css.list}>
            {movies.map((movie) => {
            return (
                <li key={movie.id} className={css.item}>
						<Link to={`/movies/${movie.id}`} state={{from: location}}>
						{movie.name? movie.name : movie.title}
						</Link>
				</li>
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