import UserListItem from "./UsersListItem";

export default function UserList({userList}){
	return(
	<div className="scroll-container">
		<ul className="user-list">

		{userList.map((user) => (
		<UserListItem key={user.id}
		avatarUrl={user.profileImage}
		firstName={user.firstName}
		lastName={user.lastName}
		email={user.email}
		bgColor={user.favouriteColour}/>
		))}
		</ul>
	</div>
	)

}
