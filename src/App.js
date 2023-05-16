import { useState } from 'react';
import './App.css';
import HamburgerToggle from './components/navbar/hamburgerToggle';
import Main from './components/home/main';
import Navbar from './components/navbar/navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './components/about/about';
import Projects from './components/projects/projects';

function App() {
	const [isNavbarShown, setIsNavbarShown] = useState(false);
	return (
		<div className='App' style={{ position: 'relative' }}>
			<HamburgerToggle getNavbar={isNavbarShown} setNavbar={setIsNavbarShown} />
			<Navbar getNavbar={isNavbarShown} setNavbar={setIsNavbarShown} />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/About' element={<About />} />
				<Route path='/Projects' element={<Projects />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</div>
	);
}

export default App;
