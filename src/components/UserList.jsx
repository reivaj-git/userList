import User from "./User"

const UserList = ({ users, deleteUser, chageShowModel, setIsUserUpdate }) => {
  console.log(users)
  return (
    <section className="max-w-[1200px] flex justify-center gap-4 flex-wrap mx-auto p-4">

    {
        users.map((user) => <User key={user.id} 
        user={user} 
        deleteUser={deleteUser} 
        chageShowModel={chageShowModel}
          setIsUserUpdate={setIsUserUpdate}
        />)
    }

    </section>
  )
}

export default UserList