import { useRef } from 'react';
import { Mesh, TextureLoader } from 'three';
import { useFrame, useLoader } from 'react-three-fiber';

import _spec from '../images/earthspec1k.jpg';
import _earth from '../images/earth16k.jpg';

export default function Planet() {
	const mesh = useRef<Mesh>();

	useFrame(() => {
		if (mesh.current) {mesh.current.rotation.y += 0.001};
	});

	const [spec, earth] = useLoader(TextureLoader, [_spec, _earth]);

	return (
		<mesh
			ref={mesh}
			position={[0, 0, 0]}
		>
			<sphereGeometry args={[2, 64, 64]} />
			<meshPhongMaterial map={earth} specularMap={spec} />
		</mesh>
	);
}
