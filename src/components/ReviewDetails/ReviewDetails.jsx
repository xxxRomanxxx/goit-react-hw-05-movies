import PropTypes from 'prop-types';

const ReviewDetails = ({author_details, content}) => {
	return (
		<li>
			<h3>{author_details.username}</h3>
			<p>{content}</p>
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