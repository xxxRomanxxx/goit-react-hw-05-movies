import PropTypes from 'prop-types';
import css from './CastDetails.module.css'

const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w300/';
const defaultImg = 'https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg';

const CastDetails = ({profile_path, original_name, character}) => {
	return (
		<li className={css.list}>
			<img 
			src={profile_path ? IMAGES_BASE_URL+profile_path : defaultImg} 
			alt={original_name}
			className={css.img}
			/>
			<h4 className={css.title}>{original_name}</h4>
			<p className={css.text}>Character: {character}</p>
		</li>
	)
};

export default CastDetails;

CastDetails.propTypes = {
	profile_path: PropTypes.string,
	original_name: PropTypes.string,
	character: PropTypes.string,
}