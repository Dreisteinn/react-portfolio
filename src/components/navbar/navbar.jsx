import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
	const { getNavbar, setNavbar } = props;
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
