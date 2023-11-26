import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import HamburgerToggle from './components/navbar/HamburgerToggle.tsx';
import Main from './components/home/Main.tsx';
import Navbar from './components/navbar/Navbar.tsx';
import About from './components/about/About.tsx';
import Projects from './components/projects/Projects.tsx';
import Demo from './components/Demo.tsx';

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
