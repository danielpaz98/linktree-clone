import React from "react";

export default function BtnLink({ text, icon, link }) {
	return (
		<a className="btn-link" target="_blank" href={link}>
			{icon && <i className={icon}></i>}
			<span className="btn-link-text">{text}</span>
		</a>
	);
}
