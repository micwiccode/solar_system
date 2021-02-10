import React from 'react';
import { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';

import './SolarSystem.scss';
import Planet from './Planet';
import CameraControls from './CameraControl';

export default function SolarSystem() {
	return (
		<div className="SolarSystem">
			<Canvas>
				<CameraControls />
				<ambientLight intensity={0.3} />
				<spotLight angle={0} penumbra={0.1} position={[5,3,5]} />
				<pointLight position={[10, 10, 10]} />
				<Suspense fallback={null}>
					<Planet />
				</Suspense>
			</Canvas>
		</div>
	);
}

