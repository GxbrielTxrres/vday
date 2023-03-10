/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: PriscilaSantiago (https://sketchfab.com/PriscilaSantiago)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/heart-emoji-fbe5ef1d09cb408c9c6dcdd7c0b47d9b
title: Heart Emoji
*/

import React, { forwardRef, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export const Heart = forwardRef(function Heart(props, ref) {
	const { nodes, materials } = useGLTF("/heart_emoji.glb");

	return (
		<group ref={ref} {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 3]} scale={0.03}>
				<mesh
					castShadow
					geometry={nodes.Object_2.geometry}
					material={materials.pinkHeart}
				/>
				<mesh
					castShadow
					geometry={nodes.Object_3.geometry}
					material={materials["default"]}
				/>
				<mesh
					castShadow
					geometry={nodes.Object_4.geometry}
					material={materials.heartSparkles}
				/>
			</group>
		</group>
	);
});

useGLTF.preload("/heart_emoji.glb");
