
import { Link } from 'react-router-dom';
import css from './Back.module.css'

const Back = ({to}) => {
	return (
		<Link to={to} className={css.link}>	&larr; Go back</Link>
	)
};

export default Back;

