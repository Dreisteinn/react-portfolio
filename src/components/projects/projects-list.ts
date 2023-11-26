import {
	SiReact as React,
	SiCss3 as Css,
	SiHtml5 as Html,
	SiFirebase as Firebase,
	SiSwiper as Swiper,
	SiExpress as Express,
	SiMongodb as Mongo,
	SiRedux as Redux,
	SiLaravel as Laravel,
	SiVuedotjs as Vue,
	SiTailwindcss as Tailwind,
	SiAlpinedotjs as Alpine,
	SiSocketdotio as SocketIO,
} from 'react-icons/si';
import { IoLogoJavascript as Js, IoLogoSass as Sass, IoLogoNodejs as Node } from 'react-icons/io';

const GetProjects = async () => {
	return [
		{
			name: 'Communicator (Real-time chat app)',
			slug: 'communicator',
			techs: [React, Tailwind, Node, Express, SocketIO, Mongo],
			demo: 'https://youtube.com/embed/i2aJllBWpPg?si=5cEsHTgxBUCYGJj-"',
			code: 'https://github.com/GeekoIsaGeek/communicator-front',
			image: (await import('../../images/projects/communicator.png')).default,
		},
		{
			name: 'Epic Movie Quotes (Real-time interactions)',
			slug: 'epic-movie-quotes',
			techs: [Vue, Tailwind, Laravel],
			demo: 'https://youtube.com/embed/Rw1v1Xqc1-c',
			code: 'https://github.com/GeekoIsaGeek/epic-movie-quotes-front',
			image: (await import('../../images/projects/epic-movie-quotes.png')).default,
		},
		{
			name: 'Real Estate (MERN)',
			slug: 'real-estate',
			techs: [Mongo, Express, React, Node, Sass],
			demo: 'https://re-geeko.vercel.app/',
			code: 'https://github.com/GeekoIsaGeek/real-estate-client',
			image: (await import('../../images/projects/Real-Estate.png')).default,
		},
		{
			name: 'Envo - Personal Dictionary',
			slug: 'envo',
			techs: [React, Firebase, Redux, Sass],
			demo: 'https://envo-geeko.vercel.app/',
			code: 'https://github.com/GeekoIsaGeek/Envo',
			image: (await import('../../images/projects/Envo.webp')).default,
		},
		{
			name: 'Covid Statistics',
			techs: [Laravel, Tailwind, Alpine],
			slug: 'covid-statistics',
			demo: 'https://coronatime.giorgi-kvrivishvili.redberryinternship.ge/statistics/country',
			code: '',
			image: (await import('../../images/projects/Coronatime.png')).default,
		},
		{
			name: 'Covid Questionnaire',
			techs: [Vue, Tailwind],
			slug: 'covid-questionnaire',
			demo: 'https://covid-questionnaire.vercel.app/',
			code: 'https://github.com/GeekoIsaGeek/Covid-Questionnaire',
			image: (await import('../../images/projects/Covid-Questionnaire.png')).default,
		},
		{
			name: 'Image Gallery',
			techs: [React, Firebase],
			slug: 'image-gallery',
			demo: 'https://image-gallery-geeko.vercel.app/',
			code: 'https://github.com/GeekoIsaGeek/Image-Gallery',
			image: (await import('../../images/projects/Image-gallery.webp')).default,
		},
		{
			name: 'Aloha - Online shop (Client)',
			techs: [React, Firebase, Swiper],
			demo: 'https://aloha-geeko.vercel.app/',
			code: 'https://github.com/GeekoIsaGeek/Aloha',
			image: (await import('../../images/projects/Aloha.webp')).default,
			slug: 'aloha',
		},
		{
			name: 'Virtual Keyboard',
			techs: [Html, Css, Js],
			demo: 'https://GeekoIsaGeek.github.io/Virtual-Keyboard/',
			code: 'https://github.com/GeekoIsaGeek/Virtual-Keyboard/',
			image: (await import('../../images/projects/virtual-keyboard.webp')).default,
			slug: 'virtual-keyboard',
		},
	];
};
export default await GetProjects();
