import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
const HamburgerToggle = (props) => {
  const handleClick = () => props.setNavbar((prev) => !prev);

  return (
    <div className="nav-toggle" onClick={() => handleClick()}>
      {props.getNavbar ? <MdClose /> : <GiHamburgerMenu />}
    </div>
  );
};

export default HamburgerToggle;
