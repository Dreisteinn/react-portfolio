import { NavLink } from 'react-router-dom';
import { Props } from './Navbar.types';

const Navbar = ({ getNavbar, setNavbar }: Props) => {
	const handleClick = () => setNavbar((prev) => !prev);
	return (
		<div className={getNavbar ? 'navigation active' : 'navigation'}>
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
