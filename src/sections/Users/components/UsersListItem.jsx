export default function UserListItem({avatarUrl, firstName, lastName, email, bgColor}){
	return(
	<li style={{ background: bgColor }}>
	      <img src={avatarUrl} alt={`${firstName} ${lastName}`} />
	      <h3>{firstName} {lastName}</h3>
	      <p>Email: {email}</p>
	</li>
	)

}
