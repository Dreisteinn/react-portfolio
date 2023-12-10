import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { Props } from './Navbar.types';

const HamburgerToggle = ({ setCanShowNavbar, canShowNavbar }: Props) => {
	const handleClick = () => setCanShowNavbar((prev) => !prev);

	return (
		<div className='nav-toggle' onClick={() => handleClick()}>
			{canShowNavbar ? <MdClose /> : <GiHamburgerMenu />}
		</div>
	);
};

export default HamburgerToggle;
