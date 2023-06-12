import './App.css';

import { BrowserRouter } from 'react-router-dom';
import {
	About,
	BallCanvas,
	Contact,
	Feedbacks,
	Hero,
	Works,
	Tech,
	StarsCanvas,
	Navbar,
	Experience
} from './components';

function App() {
	return (
		<BrowserRouter>
			<div className='relative z-0 bg-primary'>
				<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<Works />
				<Feedbacks />
				<div className='relative z-0'>
					{/* 3d stars objects */}
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
