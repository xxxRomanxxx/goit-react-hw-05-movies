import PropTypes from 'prop-types';
import css from './ReviewDetails.module.css'

const ReviewDetails = ({author_details, content}) => {
	return (
		<li className={css.list}>
			<h3 className={css.title}>{author_details.username}</h3>
			<p className={css.text}>{content}</p>
		</li>
	)
};

export default ReviewDetails;

ReviewDetails.prototype = {
	author_details: PropTypes.shape({
		username: PropTypes.string,
	}),
	content: PropTypes.string,
}