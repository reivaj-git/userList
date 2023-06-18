const User = ({ user, deleteUser, chageShowModel, setIsUserUpdate }) => {

  const handleClickDelete = () => {
    deleteUser(user.id)
  }
  const handleClicUpdate = () => {
    chageShowModel()
    setIsUserUpdate(user)
  }

  return (

    <article className="border border-gray-300 shadow-sm rounded-md sm:min-w-[220px] max-w-[240px] min-h-[242px] p-4 overflow-hidden relative ">
      <h4 className="text-lg font-bold mb-2 border-b border-gray-300">{user.first_name} {user.last_name}</h4>
      <div className="mb-2">
        <h5 className="text-sm font-bold ">Correo</h5>
        <span>{user.email}</span>
      </div>
      <div className="mb-2">
        <h5 className="text-sm font-bold ">Cumpleaños</h5>
        <span ><i className="bx bxs-cake "></i> {user.birthday || "No registrado"}</span>
        <div className=" mt-1 border-b border-gray-300"></div>
      </div>

      <div className=" absolute gap-2  bottom-2 left-1/2 transform -translate-x-1/2 grid grid-cols-2 border- border-gray-300">

        <button className="bg-red-700 hover:bg-red-800 text-white px-3 py-2 rounded" onClick={handleClickDelete}>
          <i className="bx bxs-trash-alt"></i>
        </button>

        <button className="bg-lightNight hover:bg-nightPeach text-white px-3 py-2 rounded" onClick={handleClicUpdate}>
          <i className="bx bxs-message-alt-edit"></i>
        </button>

      </div>

    </article>
  )
}

export default User