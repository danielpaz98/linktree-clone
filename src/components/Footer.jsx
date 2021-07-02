import React from "react";

export default function Footer({ logo, icon, text }) {
	return (
		<div className="footer">
			{icon && <i className={`${icon} footer-icon`}></i>}
			{text && <span className="footer-text">{text}</span>}
		</div>
	);
}
