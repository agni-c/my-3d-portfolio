import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants/constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
	const [active, setActive] = useState('');
	const [toggle, setToggle] = useState(false);
	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
			<div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
				<Link
					to='/'
					className='flex items-center gap-2'
					onClick={e => {
						e.preventDefault();
						setActive('');
						window.scrollTo(0, 0);
					}}>
					<img
						src={logo}
						alt='logo'
						className='w-10 h-10 object-contain'
					/>
					<p className='text-white text-[18px] font-bold cursor-pointer flex'>
						Agnibha&nbsp;
						<span className='sm:block hidden'>| full stack dev</span>
					</p>
				</Link>
				<ul className='list-none hidden sm:flex flex-row gap-10'>
					{navLinks.map((link, index) => (
						<li
							key={link.id}
							className={`${
								active === link.title
									? 'text-white'
									: 'text-secondary'
							} font-medium cursor-pointer text-[18px] hover:text-white`}
							onClick={() => setActive(link.title)}>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>

				{/* mobile menu */}
				<div className='sm:hidden flex flex-1 items-center justify-end'>
					<img
						src={toggle ? close : menu}
						alt='menu'
						className='w-6 h-6 cursor-pointer'
						onClick={() => setToggle(!toggle)}
					/>
					<div
						className={`${
							!toggle ? 'hidden' : 'flex'
						} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
						<ul className='list-none flex justify-end flex-col gap-4'>
							{navLinks.map((link, index) => (
								<li
									key={link.id}
									className={`${
										active === link.title
											? 'text-white'
											: 'text-secondary'
									} font-medium cursor-pointer  hover:text-white font-poppins text-[16px] `}
									onClick={() => {
										setToggle(!toggle);
										setActive(link.title);
									}}>
									<a href={`#${link.id}`}>{link.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
