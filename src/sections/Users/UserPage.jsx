import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserPage() {
	const { id } = useParams();
	const [user, setUser] = useState(null);

	useEffect(() => {
		fetch(`https://boolean-uk-api-server.fly.dev/ReRaulReb/contact/${id}`)
		.then(res => res.json())
		.then(setUser);
	}, [id]);

	if (!user) return <p>Loading...</p>;

	return (
		<section style={{background: user.favouriteColour}}>
			<Link to="/">← Back to main page</Link>
			<h2>{user.firstName} {user.lastName}</h2>
			<img src={user.profileImage} alt={`${user.firstName} ${user.lastName}`} />
			<p>Email: {user.email}</p>
			<h3> Other details </h3>
			<p>Gender: {user.gender}</p>
			<p>Job title: {user.jobTitle}</p>
			<p>Street: {user.street}</p>
			<p>City: {user.city}</p>
		</section>
	);
}
