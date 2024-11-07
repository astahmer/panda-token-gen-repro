"use client";

import {
	Box,
	Button,
	Combobox,
	Container,
	createListCollection,
	Dialog,
	Select,
	Square,
// } from "@omnidev/sigil";
// } from "../node_modules/@omnidev/sigil/build/sigil.js"
} from "#omnidev/sigil";

const HomePage = () => (
	<Container p={6}>
		Square with red.500 background color:
		<Square size={20} bgColor="red.500" padding="50px" border="1px solid blue" />
	</Container>
);

export default HomePage;
