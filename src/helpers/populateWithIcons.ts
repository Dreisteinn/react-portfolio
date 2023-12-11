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
import { IconType } from 'react-icons';

const icons: { [key: string]: IconType } = {
	react: React,
	css: Css,
	html: Html,
	firebase: Firebase,
	swiper: Swiper,
	express: Express,
	mongo: Mongo,
	redux: Redux,
	laravel: Laravel,
	vue: Vue,
	tailwind: Tailwind,
	alpine: Alpine,
	socketio: SocketIO,
	js: Js,
	sass: Sass,
	node: Node,
};

export const populateWithIcons = (techs: string[]) => {
	if (!techs.length) {
		return [];
	}
	return techs.map((tech) => icons[tech.toLowerCase()]).filter((icon) => icon !== undefined);
};
