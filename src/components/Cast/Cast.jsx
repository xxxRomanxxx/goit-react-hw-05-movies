
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieCast } from "Api/Api";
import CastDetails from "components/CastDetails/CastDetails";
import css from './Cast.module.css'

const Cast = () => {

	const {movieId} = useParams();
	const [cast, setCast] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		async function fetchCast() {
			const cast = await fetchMovieCast(movieId);
			setCast(cast);
		}
		fetchCast().catch((error) => {
			setError('Sorry, something went wrong.');
			console.error(error);
		})
	}, [movieId]);

	return (
		<div className={css.container}>
			{error ? (
				<p>{error}</p>
			) : (
				<ul className={css.list}>
					{cast?.map((castValue) => {
						return(
							<CastDetails 
							key={castValue.id}
							profile_path={castValue.profile_path}
							original_name={castValue.original_name}
							character={castValue.character} 
							/>
						)
					})}
				</ul>
			)}
			{cast.length === 0 && <p>There is no information about the cast of this movie.</p>}
		</div>
	);
};

export default Cast;