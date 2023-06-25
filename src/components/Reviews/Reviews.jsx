import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieRewiews } from "Api/Api";
import ReviewDetails from "components/ReviewDetails/ReviewDetails";

const Reviews = () => {

	const {movieId} = useParams();
	const [reviews, setReviews] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		async function fetchReviews() {
			const reviews = await fetchMovieRewiews(movieId);
			setReviews(reviews);
		}
		fetchReviews().catch((error) => {
			setError('Sorry, something went wrong.');
			console.error(error);
		})
	}, [movieId]);

	return (
		<div>
			{error ? (
				<p>{error}</p>
			) : (
				<ul>
					{reviews?.map((review) => {
						return (
							<ReviewDetails key={review.id}
								author_details={review.author_details}
								content={review.content}
							/>
						)
					})}
				</ul>
			)}
			{!reviews && <p>There are no reviews for this movie yet.</p>}
		</div>
	);
};

export default Reviews;