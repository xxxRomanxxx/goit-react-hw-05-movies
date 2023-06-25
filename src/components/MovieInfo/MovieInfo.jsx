import PropTypes from 'prop-types';
import css from './MovieInfo.module.css'

const BASE_URL = 'https://image.tmdb.org/t/p/w300/';
const defaultImg = 'https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg';

const MovieInfo = ({title, poster, vote, overview, genres}) => {
    return(
        <div className={css.container}>
            <div className={css.imgContainer}>
            <img className={css.img} src={poster ? BASE_URL + poster : defaultImg} alt={title} />
            </div>
            <div className={css.infoContainer}>
            <h2 className={css.title}>{title}</h2>
            <p className={css.text}>{vote * 10}%</p>
            <h2 className={css.title}>Overview</h2>
            <p className={css.text}>{overview}</p>
            <h2 className={css.title}>Genres</h2>
            <p className={css.text}>{genres?.map(genre => genre.name).join(' ')}</p>
            </div>
        </div>
    )
}

export default MovieInfo;

MovieInfo.propTypes = {
	poster: PropTypes.string, 
	title: PropTypes.string, 
	vote: PropTypes.number, 
	overview: PropTypes.string, 
	genres: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
	})),
}