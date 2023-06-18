const Header = ({ chageShowModel }) => {

  const handleClickShowModal = () => {
    chageShowModel()
  }

  return (
    <section className="flex justify-between items-center gap-2 p-4">

      <h1 className="font-bold text-2xl">Usuarios</h1>

      <button onClick={handleClickShowModal} className="btn-primary"> <i className='bx bx-plus'></i> Crear un nuevo usuario</button>

    </section>
  )
}

export default Header