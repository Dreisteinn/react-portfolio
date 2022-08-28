import {
	SiReact as React,
	SiCss3 as Css,
	SiHtml5 as Html,
	SiFirebase as Firebase,
	SiSwiper as Swiper,
	SiStyledcomponents as StyledComponents,
	SiRedux as Redux,
} from 'react-icons/si';
import { IoLogoJavascript as Js, IoLogoSass as Sass } from 'react-icons/io';

const List = [
	{
		name: 'Image Gallery',
		techs: [<React />, <Firebase />],
		demo: 'https://image-gallery-olive.vercel.app/',
		code: 'https://github.com/drainerr/Image-Gallery',
		image: require('../../images/projects/Image-gallery.webp'),
	},
	{
		name: 'Aloha - Online shop',
		techs: [<React />, <Firebase />, <Swiper />],
		demo: 'https://aloha-two.vercel.app/',
		code: 'https://github.com/drainerr/Aloha',
		image: require('../../images/projects/Aloha.webp'),
	},
	{
		name: 'Envo - Personal Dictionary',
		techs: [<React />, <Firebase />, <Redux />, <Sass />],
		demo: 'https://envo-zeta.vercel.app/',
		code: 'https://github.com/drainerr/Envo',
		image: require('../../images/projects/Envo.webp'),
	},
	{
		name: 'Virtual Keyboard',
		techs: [<Html />, <Css />, <Js />],
		demo: 'https://drainerr.github.io/Virtual-Keyboard/',
		code: 'https://github.com/drainerr/Virtual-Keyboard/',
		image: require('../../images/projects/virtual-keyboard.webp'),
	},
	{
		name: 'List Of Countries',
		techs: [<React />],
		demo: 'https://drainerr.github.io/Countries',
		code: 'https://github.com/drainerr/Countries/tree/main/src',
		image: require('../../images/projects/Countries.webp'),
	},
	{
		name: 'Arbeitnow Jobs',
		techs: [<React />, <Css />],
		demo: 'https://drainerr.github.io/Arbeitnow-Jobs',
		code: 'https://github.com/drainerr/Arbeitnow-Jobs/tree/main/src',
		image: require('../../images/projects/joblanding.webp'),
	},
	{
		name: 'Country Quizz',
		techs: [<React />, <Css />],
		demo: 'https://drainerr.github.io/Country-Quizz/',
		code: 'https://github.com/drainerr/Country-Quizz/tree/main/src',
		image: require('../../images/projects/Country-Quizz.webp'),
	},
	{
		name: 'Pomodoro (25+5 Clock)',
		techs: [<Html />, <Sass />, <Js />],
		demo: 'https://drainerr.github.io/25-5-Clock/',
		code: 'https://github.com/drainerr/25-5-Clock/',
		image: require('../../images/projects/Pomodoro.webp'),
	},
	{
		name: 'Covid-19 Tracker',
		techs: [<Html />, <Sass />, <Js />],
		demo: 'https://drainerr.github.io/Covid-19-Tracker/',
		code: 'https://github.com/drainerr/Covid-19-Tracker/',
		image: require('../../images/projects/Covid-Tracker.webp'),
	},
	{
		name: 'Windbnb',
		techs: [<React />, <Css />],
		demo: 'https://drainerr.github.io/Windbnb/',
		code: 'https://github.com/drainerr/Windbnb/tree/main/src',
		image: require('../../images/projects/Windbnb.webp'),
	},
	{
		name: 'Space Tourism',
		techs: [<React />, <Sass />],
		demo: 'https://drainerr.github.io/Space-Tourism/',
		code: 'https://github.com/drainerr/Space-Tourism/tree/main/src',
		image: require('../../images/projects/space-tourism.webp'),
	},
];

export default List;
