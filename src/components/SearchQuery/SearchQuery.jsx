import { useState } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import css from './SearchQuery.module.css'


const SearchQuery = ({onSubmit, searchQuery}) => {
	const [query, setQuery] = useState('');
	const [disabledBtn, setDisabledBtn] = useState(false);

	const handleChange = (evt) => {
		setQuery(evt.target.value);
		setDisabledBtn(false);
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();

		if (query.trim() === '') {
			Notiflix.Notify.warning('Search is a required field');
			return;
		}

		onSubmit(query);
		setDisabledBtn(true);
	}

	return (
		<form 
		onSubmit={handleSubmit}
		className={css.form}
		>
			<input
				type="text"
				name="query"
				value={query}
				onChange={handleChange}
				placeholder="Enter the name of the movie"
				className={css.input}
			/>
			<button 
			type="submit" 
			disabled={disabledBtn}
			className={css.button}
			>Search</button>
		</form>
	)
};

export default SearchQuery;

SearchQuery.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	searchQuery: PropTypes.string,
}