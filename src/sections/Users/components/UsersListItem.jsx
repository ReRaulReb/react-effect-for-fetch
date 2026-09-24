import {Link} from "react-router-dom";

export default function UserListItem({avatarUrl, firstName, lastName, email, bgColor, id}){
	return(
	<li style={{ background: bgColor }}>
		<Link to = {`/user/${id}`}>
			<img src={avatarUrl} alt={`${firstName} ${lastName}`} />
			<h3>{firstName} {lastName}</h3>
			<p>Email: {email}</p>
		</Link>
	</li>
	)

}
