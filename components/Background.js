import { useScroll, shaderMaterial } from "@react-three/drei";
import { useFrame, useThree, extend } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import vertexShader from "lib/shaders/vertexShader";
import fragmentShader from "lib/shaders/fragmentShader";
import { Color, Vector2 } from "three";
const ValentinesMaterial = shaderMaterial(
	{
		uTime: 0,
		uColor: new Color("red"),
	},
	vertexShader,
	fragmentShader,
);

extend({ ValentinesMaterial });

export default function Background() {
	const plane = useRef();
	const light = useRef();
	const shader = useRef();

	const scroll = useScroll();

	useFrame(({ clock }) => {
		shader.current.material.uniforms.uTime.value = scroll.offset;
	});

	useLayoutEffect(() => {
		light.current.lookAt(plane.current.position);
	}, []);
	const { size } = useThree();
	return (
		<>
			<pointLight castShadow position={[-2, 2, 5]} ref={light} />
			<mesh ref={shader} position={[0, 0, -5]}>
				<planeGeometry args={[size.width, size.height]} />
				<valentinesMaterial key={ValentinesMaterial.key} />
			</mesh>
			<mesh ref={plane} receiveShadow position={[0, 0.75, 0]}>
				<planeGeometry args={[2, 2]} />
				<valentinesMaterial uColor="red" key={ValentinesMaterial.key} />
			</mesh>
		</>
	);
}
