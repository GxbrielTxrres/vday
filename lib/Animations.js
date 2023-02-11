export function WillAnimations(tl, will) {
	tl.current.to(will.current.scale, { x: 1, duration: 1 }, 1);
	tl.current.to(will.current.scale, { y: 1, duration: 1 }, 1);
	tl.current.to(will.current.scale, { z: 1, duration: 1 }, 0);

	tl.current.to(
		will.current.position,
		{ x: -2, duration: 1, ease: "easeIn" },
		1.75,
	);
	tl.current.to(
		will.current.rotation,
		{ y: -1.5, duration: 1, ease: "easeIn" },
		1.5,
	);
	tl.current.to(
		will.current.material,
		{ opacity: 0, duration: 1, ease: "easeIn" },
		1.5,
	);
}

export function HeartAnimations(tl, heart) {
	tl.current.to(heart.current.scale, { x: 1, duration: 1 }, 9);
	tl.current.to(heart.current.scale, { y: 1, duration: 1 }, 7);
	tl.current.to(heart.current.scale, { z: 1, duration: 1 }, 7);

	tl.current.to(
		heart.current.children[0].children[0].material,
		{ opacity: 1, duration: 2 },
		8,
	);
	tl.current.to(
		heart.current.children[0].children[1].material,
		{ opacity: 1, duration: 2 },
		9,
	);
	tl.current.to(
		heart.current.children[0].children[2].material,
		{ opacity: 1, duration: 2 },
		9,
	);
	tl.current.to(heart.current.rotation, { y: Math.PI * 4, duration: 4 }, 8);
}

export function BeMyAnimations(tl, beMy) {
	tl.current.to(beMy.current.scale, { x: 0.25, duration: 1 }, 7);
	tl.current.to(beMy.current.scale, { y: 0.25, duration: 1 }, 7);
	tl.current.to(beMy.current.scale, { z: 0.25, duration: 1 }, 7);
	tl.current.to(beMy.current.position, { x: -1, duration: 2 }, 7.5);

	tl.current.to(beMy.current.material, { opacity: 0, duration: 2 }, 9);
}

export function YouAnimations(tl, you) {
	tl.current.to(you.current.scale, { x: 1, duration: 3 }, 3);
	tl.current.to(you.current.scale, { y: 1, duration: 3 }, 3);
	tl.current.to(you.current.scale, { z: 1, duration: 3 }, 3);
	tl.current.to(
		you.current.material,
		{ opacity: 1, duration: 1, ease: "easeIn" },
		3,
	);
	tl.current.to(
		you.current.position,
		{ x: -1, duration: 1, ease: "easeIn" },
		3,
	);
	tl.current.to(
		you.current.rotation,
		{ y: Math.PI * 1.75, duration: 3, ease: "easeIn" },
		3,
	);
	tl.current.to(
		you.current.material,
		{ opacity: 0, duration: 1, ease: "easeIn" },
		6,
	);
	tl.current.to(
		you.current.position,
		{ x: -3, duration: 1, ease: "easeIn" },
		6,
	);

	tl.current.to(
		you.current.material,
		{ opacity: 1, duration: 1, ease: "easeIn" },
		7,
	);
}
