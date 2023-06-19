import { useEffect } from "react";
import { useForm } from "react-hook-form"

const ModalForm = ({ isShowModal, createUser, isUserUpdate, updateUser, resetModalForm, handleCloseModal }) => {

  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    if (!data.birthday) data.birthday = null;
    if (isUserUpdate) {
      updateUser(data, reset)
    }else {
      createUser(data, reset);
    }
    
  }

  const handleCloseModalButton = () => {
    handleCloseModal();
    resetModalForm(reset);
  };

  useEffect(() => {
    if (isUserUpdate) {
      reset(isUserUpdate)
    }
  }, [isUserUpdate])
  

  return (
    <section className={`fixed top-0 left-0 right-0 h-screen bg-black/40 grid place-content-center ${isShowModal ? "opacity-100 visible" : "invisible opacity-0"} transition-opacity  z-10 `}>

      <form onSubmit={handleSubmit(submit)} className="bg-night w-[280px] p-4 grid gap-6 relative rounded-md">
        <h3 className="font-bold text-3xl">{isUserUpdate ? "Editar usuario" : "Nuevo usuario"}</h3>

        {/*//* Imput del nombre */}
        <div className="grid gap-2">
          <label className="font-bold text-sm" placeholder="nombre" >Nombre: </label>
          <input placeholder="Ingresa tu nombre..." className="bg-gray-100 outline-none p-2 text-gray-800" type="text"
            {...register("first_name")}
          />
        </div>

        {/*//* Imput del apellido */}
        <div className="grid gap-2">
          <label className="font-bold text-sm" placeholder="apellido" >Apellido: </label>
          <input placeholder="Ingresa tu apellido..." className="bg-gray-100 outline-none p-2 text-gray-800" type="text"
            {...register("last_name")} />
        </div>


        {/*//* Imput del Correo */}
        <div className="grid gap-2">
          <label className="font-bold text-sm" placeholder="correo" >Correo: </label>
          <input placeholder="Ingresa tu correo..." className="bg-gray-100 outline-none p-2 text-gray-800" type="email"
            {...register("email")} />

        </div>

        {/*//* Imput del contraeña */}
        <div className="grid gap-2">
          <label className="font-bold text-sm" placeholder="contraeña" >Contraeña: </label>
          <input placeholder="Ingresa tu contraeña..." className="bg-gray-100 outline-none p-2 text-gray-800" type="password"
            {...register("password")} />
        </div>

        {/*//* Imput del cumpleaños */}
        <div className="grid gap-2">
          <label className="font-bold text-sm" placeholder="cumpleaños" >Cumpleaños: </label>
          <input placeholder="Ingresa tu cumpleaños..." className="bg-gray-100 outline-none p-2 text-gray-800" type="date"
            {...register("birthday")}
          />
        </div>

        <button onClick={handleCloseModalButton} type="button" className="absolute top-2 right-2 text-2xl hover:text-nightPeach"> <i className='bx bxs-x-circle'></i></button>

        <button className="btn-primary ">{isUserUpdate ? "Guardar cambios" : "Agregar nuevo usuario"} </button>

      </form>

    </section>
  )
}

export default ModalForm