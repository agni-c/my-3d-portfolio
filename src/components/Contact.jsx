import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { EarthCanvas } from './canvas';
import { slideIn } from '../utils/motion';

// TODO: BUG FIX:  earth model  gets bigger when  message text box gets resized
const Contact = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: ''
	});
	const formRef = useRef();
	const [loading, setLoading] = useState(false);

	const handleChange = e => {
		const { name, value } = e.target;
		setForm(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = e => {
		e.preventDefault();
		setLoading(true);
		emailjs
			.send(
				'service_w7f1pwm',
				'template_ecpdcba',
				{
					from_name: form.name,
					from_email: form.email,
					to_name: 'Agnibha',
					to_email: 'agnibha0016@gmail.com',
					message: form.message
				},
				'78_EcJ0jopBgSC59d'
			)
			.then(
				() => {
					setLoading(false);
					alert('Message sent successfully');
					setForm({
						name: '',
						email: '',
						message: ''
					});
				},
				error => {
					setLoading(false);
					alert('Message not sent');
					console.log(error);
					alert('Something went wrong. Please try again later');
				}
			);
	};

	return (
		<div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className='bg-black-100 flex-[0.75] rounded-2xl p-8'>
				<p className={`${styles.sectionSubText}`}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className='mt-12 flex flex-col gap-8'>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>
							Your Name
						</span>
						<input
							type='text'
							name='name'
							value={form.name}
							placeholder="What's your name?"
							className='bg-tertiary py-4 px-6 placeholder:text-secondary
							 text-white rounded-lg outline-none border-none font-medium
							'
							onChange={handleChange}
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>
							Your Email
						</span>
						<input
							type='text'
							name='email'
							value={form.email}
							placeholder="What's your email?"
							className='bg-tertiary py-4 px-6 placeholder:text-secondary
							 text-white rounded-lg outline-none border-none font-medium
							'
							onChange={handleChange}
						/>
					</label>
					<label className='flex flex-col'>
						<span className='text-white font-medium mb-4'>
							Your Message
						</span>
						<textarea
							rows={'7'}
							name='message'
							value={form.message}
							placeholder='What do you want to say?'
							className='bg-tertiary py-4 px-6 placeholder:text-secondary
							 text-white rounded-lg outline-none border-none font-medium
							'
							onChange={handleChange}
						/>
					</label>
					<button
						type='submit'
						className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary'>
						{loading ? 'Sending...' : 'Send'}
					</button>
				</form>
			</motion.div>
			<motion.div
				variants={slideIn('right', 'tween', 0.2)}
				className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, 'contact');
