/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from './CanvasLoader';
import { Suspense } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Computers = ({ isMobile }) => {
	const computer = useGLTF('./desktop_pc/scene.gltf');

	return (
		<mesh>
			<hemisphereLight intensity={0.35} groundColor={'black'} />
			<pointLight intensity={1} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1} // https://en.wikipedia.org/wiki/Umbra,_penumbra_and_antumbra
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.55 : 0.75}
				position={isMobile ? [-1, -2.5, -2.1] : [0, -3.25, -1.5]}
				rotation={[-0.01, -0.1, -0.1]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const matchMediaQuery = window.matchMedia('(max-width: 768px)');
		setIsMobile(matchMediaQuery.matches);

		const handleMediaQueryChange = e => {
			setIsMobile(e.matches);
		};

		matchMediaQuery.addEventListener(
			'change',
			handleMediaQueryChange
		);
		return () => {
			matchMediaQuery.removeEventListener(
				'change',
				handleMediaQueryChange
			);
		};
	}, []);

	return (
		<Canvas
			frameloop='demand'
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				{/* https://en.wikipedia.org/wiki/Polar_angle */}
				{/* https://sbcode.net/react-three-fiber/orbit-controls/ */}
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default ComputersCanvas;
