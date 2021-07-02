import React from "react";

import SocialLinks from "~/components/SocialLinks";
import { social } from "~/fakeAPI/user";

export default function Card({
	image = "./images/default-image.jpg",
	firstName = "John",
	lastName = "Doe",
	country = "United States",
	city = "Miami",
	profession = "Full Stack Developer",
}) {
	return (
		<div className="card">
			<div className="card-profile">
				<div className="card-img">
					<img src={image} alt="Profile Picture" />
				</div>

				<div className="card-desc">
					<div className="card-title">{firstName + " " + lastName}</div>
					<div className="card-text">{profession}</div>
					<div className="card-text">{city + " - " + country}</div>
				</div>

				<SocialLinks social={social} />
			</div>
		</div>
	);
}
