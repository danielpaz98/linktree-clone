import React from "react";

import BtnLink from "~/components/BtnLink";

const getIcon = (brandName) => {
	const icon = brandName && `icon-${brandName}`;
	return icon;
};

export default function SocialLinks({ social }) {
	return social.map((item, index) => (
		<BtnLink key={index} link={item.link} text={item.text} icon={getIcon(item.name)} />
	));
}
