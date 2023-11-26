import Project from './ProjectCard';
import styles from './Projects.module.css';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import { Scrollbar, Mousewheel, EffectCoverflow } from 'swiper/modules';
import './swiper.css';
import useProjectContext from '../../hooks/useProjectContext';

const Projects = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const { projects } = useProjectContext();

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWidth(window.innerWidth);
		});

		return () =>
			window.removeEventListener('resize', () => {
				setWidth(window.innerWidth);
			});
	}, []);

	return (
		<ul className={styles.projects}>
			<Swiper
				slidesPerView={width > 768 ? 3 : 1}
				modules={[Scrollbar, Mousewheel, EffectCoverflow]}
				spaceBetween={65}
				scrollbar={{ draggable: true }}
				mousewheel={{ sensitivity: 0.1 }}
				coverflowEffect={{
					rotate: 20,
					slideShadows: false,
				}}
				effect='coverflow'
			>
				{projects.map((project, i) => (
					<SwiperSlide key={i}>
						<Project
							name={project.name}
							techs={project.techs}
							demo={project.demo}
							code={project.code}
							image={project.image}
							slug={project.slug}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</ul>
	);
};

export default Projects;
