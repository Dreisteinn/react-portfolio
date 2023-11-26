import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { Props } from './Navbar.types';

const HamburgerToggle = ({ setNavbar, getNavbar }: Props) => {
	const handleClick = () => setNavbar((prev) => !prev);

	return (
		<div className='nav-toggle' onClick={() => handleClick()}>
			{getNavbar ? <MdClose /> : <GiHamburgerMenu />}
		</div>
	);
};

export default HamburgerToggle;
