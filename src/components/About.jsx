import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants/constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ title, icon, index }) => {
	return (
		<Tilt className='xs:w-[250px] w-full'>
			<motion.div
				variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
				className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
				<motion.div
					options={{
						max: 25,
						scale: 1.05,
						speed: 500
					}}
					className='bg-tertiary rounded-[20px] py-6 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
					<img
						className='w-16 h-16 object-contain'
						src={icon}
						alt={title}
					/>
					<h3 className='text-white text-[20px] font-bold text-center'>
						{title}
					</h3>
				</motion.div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
				I'm a software developer who uses the MERN stack to create
				dynamic and interactive applications. I pride myself on
				delivering high-quality solutions and tackling complex
				challenges.
			</motion.p>
			<div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, idx) => (
					<ServiceCard key={service.title} index={idx} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, 'about');
