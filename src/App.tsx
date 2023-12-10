import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import HamburgerToggle from './components/Navbar/HamburgerToggle.tsx';
import Main from './components/Home/Main.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import About from './components/About/About.tsx';
import Projects from './components/Projects/Projects.tsx';
import Demo from './components/Demo/Demo.tsx';
import { getHomePageData } from './config/sanity.ts';
import { HomePageData } from './types/sanity.ts';
import Admin from './components/Admin/Admin.tsx';

const App = () => {
	const [canShowNavbar, setCanShowNavbar] = useState(false);
	const [homePageData, setHomePageData] = useState<HomePageData>();
	useEffect(() => {
		if (!homePageData) {
			const set = async () => {
				const data = await getHomePageData();
				setHomePageData(data);
			};
			set();
		}
		console.log(homePageData);
	}, [homePageData]);
	return (
		<div className='App' style={{ position: 'relative' }}>
			<HamburgerToggle canShowNavbar={canShowNavbar} setCanShowNavbar={setCanShowNavbar} />
			<Navbar canShowNavbar={canShowNavbar} setCanShowNavbar={setCanShowNavbar} />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/demo/:project' element={<Demo />} />
				<Route path='/admin' element={<Admin />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</div>
	);
};

export default App;
