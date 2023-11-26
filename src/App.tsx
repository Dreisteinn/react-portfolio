import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import HamburgerToggle from './components/navbar/hamburgerToggle';
import Main from './components/home/main';
import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Demo from './components/demo';

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
				<Route path='/Demo/:project' element={<Demo />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</div>
	);
}

export default App;
