import { useEffect, useLayoutEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";

import gsap from "gsap";
import Message from "./Message";

import {
	WillAnimations,
	HeartAnimations,
	YouAnimations,
	BeMyAnimations,
} from "lib/Animations";

import { Heart } from "./Heart";
import { Tulip } from "./Tulip";

export default function Messages() {
	const will = useRef();
	const you = useRef();
	const beMy = useRef();
	const heart = useRef();
	const tl = useRef();

	const scroll = useScroll();

	useFrame(() => {
		tl.current.seek(scroll.offset * tl.current.duration());
	});

	useEffect(() => {});

	useLayoutEffect(() => {
		heart.current.traverse((children) => {
			if (children.material !== undefined) {
				children.material.transparent = true;
				children.material.opacity = 0;
			}
		});

		tl.current = gsap.timeline();

		WillAnimations(tl, will);

		YouAnimations(tl, you);

		HeartAnimations(tl, heart);

		BeMyAnimations(tl, beMy);
	}, []);

	return (
		<group>
			<Message
				ref={will}
				position={[0, 0, 0]}
				text="Will"
				heart={false}
			/>

			<Message ref={you} position={[0, -1, 0]} text="You" heart={false} />
			<Message
				ref={beMy}
				position={[0, -2, 0]}
				text="Be My Valentine"
				heart={true}
			/>
			<Heart ref={heart} />
		</group>
	);
}
