import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
	const { progress } = useProgress();
	return (
		<Html center>
			<span className='canvas-load'></span>
			<p
				style={{
					fontSize: 14,
					color: '#f1f1f1',
					fontWeight: 800,
					marginTop: 40
				}}>
				{progress.toFixed(2)}% // TODO: change this with a lottie file
				animation
			</p>
		</Html>
	);
};

export default CanvasLoader;
