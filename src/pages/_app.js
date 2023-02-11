import "@/styles/globals.css";
import { Center, ScrollControls } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import Background from "components/Background";
import Messages from "components/Messages";
import { Tulip } from "components/Tulip";

import { styles } from "lib/styles";
import { Perf } from "r3f-perf";

export default function App({ Component, pageProps }) {
	return (
		<div>
			<Canvas shadows style={{ ...styles }}>
				<Perf />

				<ScrollControls pages={3}>
					<Background />
					<Center>
						<Messages />
					</Center>
					<Tulip />
				</ScrollControls>
			</Canvas>
			<Component {...pageProps} />
		</div>
	);
}
