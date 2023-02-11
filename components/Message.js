import { Float, Sparkles, Text3D, useMatcapTexture } from "@react-three/drei";
import { forwardRef, useEffect } from "react";
import { MeshMatcapMaterial, sRGBEncoding } from "three";

const material = new MeshMatcapMaterial({ transparent: true });

const Message = forwardRef(function Message(props, ref) {
	const [matCapTexture] = useMatcapTexture(
		"89204B_17080D_DA4377_F780B5",
		256,
	);

	useEffect(() => {
		material.matcap = matCapTexture;
		material.needsUpdate = true;
		matCapTexture.encoding = sRGBEncoding;
		matCapTexture.needsUpdate = true;
	}, []);

	if (props.heart) {
		return (
			<group rotation={[-0.2, -Math.PI / 5, -Math.PI * 0.05]}>
				<Float>
					<Text3D
						ref={ref}
						scale={0}
						material={material}
						font="./fonts/helvetiker_regular.typeface.json"
						position={props.position}
					>
						<Sparkles
							position={[5, 0, 0]}
							speed={0.2}
							scale={40}
							size={2}
							noise={0.15}
						/>
						{props.text}
					</Text3D>
				</Float>
			</group>
		);
	}

	return (
		<Text3D
			scale={0}
			material={material}
			font="./fonts/helvetiker_regular.typeface.json"
			ref={ref}
			position={props.position}
		>
			{props.text}
		</Text3D>
	);
});

export default Message;
