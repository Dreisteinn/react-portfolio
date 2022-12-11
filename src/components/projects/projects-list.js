import {
	SiReact as React,
	SiCss3 as Css,
	SiHtml5 as Html,
	SiFirebase as Firebase,
	SiSwiper as Swiper,
	SiExpress as Express,
	SiMongodb as Mongo,
	SiRedux as Redux,
} from 'react-icons/si';
import { IoLogoJavascript as Js, IoLogoSass as Sass, IoLogoNodejs as Node } from 'react-icons/io';

const List = [
	{
		name: 'Real Estate (MERN)',
		techs: [<Mongo />, <Express />, <React />, <Node />, <Sass />],
		demo: 'https://re-geeko.vercel.app/',
		code: 'https://github.com/GeekoIsaGeek/real-estate-client',
		image: require('../../images/projects/Real-Estate.png'),
	},
	{
		name: 'Image Gallery',
		techs: [<React />, <Firebase />],
		demo: 'https://image-gallery-geeko.vercel.app/',
		code: 'https://github.com/GeekoIsaGeek/Image-Gallery',
		image: require('../../images/projects/Image-gallery.webp'),
	},
	{
		name: 'Aloha - Online shop (Client)',
		techs: [<React />, <Firebase />, <Swiper />],
		demo: 'https://aloha-geeko.vercel.app/',
		code: 'https://github.com/GeekoIsaGeek/Aloha',
		image: require('../../images/projects/Aloha.webp'),
	},
	{
		name: 'Envo - Personal Dictionary',
		techs: [<React />, <Firebase />, <Redux />, <Sass />],
		demo: 'https://envo-geeko.vercel.app/',
		code: 'https://github.com/GeekoIsaGeek/Envo',
		image: require('../../images/projects/Envo.webp'),
	},
	{
		name: 'Virtual Keyboard',
		techs: [<Html />, <Css />, <Js />],
		demo: 'https://GeekoIsaGeek.github.io/Virtual-Keyboard/',
		code: 'https://github.com/GeekoIsaGeek/Virtual-Keyboard/',
		image: require('../../images/projects/virtual-keyboard.webp'),
	},
	{
		name: 'Country Quizz',
		techs: [<React />, <Css />],
		demo: 'https://GeekoIsaGeek.github.io/Country-Quizz/',
		code: 'https://github.com/GeekoIsaGeek/Country-Quizz/tree/main/src',
		image: require('../../images/projects/Country-Quizz.webp'),
	},
	{
		name: 'Pomodoro (25+5 Clock)',
		techs: [<Html />, <Sass />, <Js />],
		demo: 'https://GeekoIsaGeek.github.io/25-5-Clock/',
		code: 'https://github.com/GeekoIsaGeek/25-5-Clock/',
		image: require('../../images/projects/Pomodoro.webp'),
	},
];

export default List;
