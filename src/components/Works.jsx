import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants/constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link
}) => {
	return (
		<motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
			<Tilt
				options={{ max: 45, scale: 1, speed: 450 }}
				className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
				<div className='relative w-full h-[230px]'>
					<img
						src={image}
						alt={name}
						className='w-full h-full object-cover rounded-2xl'
					/>
					<div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
						<div
							onClick={() => window.open(source_code_link, '_blank')}
							className='black-gradient rounded-full w-10 h-10 flex justify-center items-center cursor-pointer'>
							<img
								src={github}
								alt='github'
								className='object-contain'
							/>
						</div>
						{/* TODO - add live demo link */}
					</div>
				</div>

				<div className='mt-5'>
					<h3 className='text-white text-[20px] font-bold'>{name}</h3>
					<p className='text-secondary text-[15px] mt-2'>
						{description}
					</p>
				</div>

				<div className='flex flex-wrap gap-2 mt-5'>
					{tags.map((tag, idx) => (
						<span
							key={`tag-${tag.name}-${idx}`}
							className={`text-[14px] ${tag.color}`}>
							#{tag.name}
						</span>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What work</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>
			<div className='w-full flex '>
				<motion.p
					variants={fadeIn('', '', 0.1, 1)}
					className='text-secondary text-[17px] max-w-3xl leading-[30px]'>
					Following projects showcases my skills and experience
					through real-world examples of my work. Each project is
					briefly described with links to code repositories and live
					demos in it.
				</motion.p>
			</div>
			<div className='mt-20 flex flex-wrap gap-7'>
				{projects.map((project, idx) => (
					<ProjectCard
						key={`project-${project.title}-${idx}`}
						index={idx}
						{...project}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, 'work');
