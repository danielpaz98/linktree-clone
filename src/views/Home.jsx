import React from "react";

import Card from "~/components/Card";
import Footer from "~/components/Footer";

import user from "~/fakeAPI/user";

export default function Home() {
	return (
		<div>
			<Card {...user} />
			<Footer icon="icon-linktree" text="linktree" />
		</div>
	);
}
