import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import HamburgerToggle from './components/Navbar/HamburgerToggle.tsx';
import Main from './components/Home/Main.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import About from './components/About/About.tsx';
import Projects from './components/Projects/Projects.tsx';
import Demo from './components/Demo/Demo.tsx';

const App = () => {
	const [isNavbarShown, setIsNavbarShown] = useState(false);
	return (
		<div className='App' style={{ position: 'relative' }}>
			<HamburgerToggle getNavbar={isNavbarShown} setNavbar={setIsNavbarShown} />
			<Navbar getNavbar={isNavbarShown} setNavbar={setIsNavbarShown} />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/demo/:project' element={<Demo />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</div>
	);
};

export default App;
