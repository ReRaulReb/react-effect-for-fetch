import { useEffect, useState } from "react"
import UserList from "./components/UsersList"

function UsersSection() {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch('https://boolean-uk-api-server.fly.dev/ReRaulReb/contact/')
    .then(res => res.json())
    .then(setUsers)
    console.log(users)
  }

  useEffect(() => {fetchUserData()}, [])

  return (
    <section>
      <h2>Users Section</h2>
      <UserList userList={users}/>
    </section>
  )
}

export default UsersSection
