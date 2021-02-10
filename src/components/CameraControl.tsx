import { useRef } from 'react';
import { extend, useFrame, useThree } from 'react-three-fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { ReactThreeFiber } from 'react-three-fiber'

extend({ OrbitControls });
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
    }
  }
}

export default function CameraControls () {
	const {
		camera,
		gl: { domElement },
	} = useThree();

	const controls = useRef<OrbitControls>();
	useFrame(() => controls?.current?.update());

	return <orbitControls ref={controls} args={[camera, domElement]} maxDistance={20} maxPolarAngle={Math.PI /3}  minDistance={5} minPolarAngle={Math.PI/3} />;
};