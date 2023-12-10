import { NavLink } from 'react-router-dom';
import { Props } from './Navbar.types';

const Navbar = ({ canShowNavbar, setCanShowNavbar }: Props) => {
	const handleClick = () => setCanShowNavbar((prev) => !prev);
	return (
		<div className={canShowNavbar ? 'navigation active' : 'navigation'}>
			<NavLink to='/' onClick={handleClick}>
				Home
			</NavLink>
			<NavLink to='/Projects' onClick={handleClick}>
				Projects
			</NavLink>
			<NavLink to='/About' onClick={handleClick}>
				About
			</NavLink>
		</div>
	);
};

export default Navbar;
