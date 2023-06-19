import { useEffect, useState } from "react";
import Header from "./components/Header";
import ModalForm from "./components/ModalForm";
import axios from "axios";
import UserList from "./components/UserList";
import NotificationModal from "./components/NotificationModal";

const BASE_URL = "https://users-crud.academlo.tech/"

const DEFAULT_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
}

// Funciones

function App() {
  const [isUserUpdate, setIsUserUpdate] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [notification, setNotification] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const chageShowModel = () => setIsShowModal(!isShowModal);

  const getAllUsers = () => {
    const url = BASE_URL + "/users/"

    axios.get(url)
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err))

  }

  const createUser = (data, reset) => {
    const url = BASE_URL + "/users/"

    axios.post(url, data)
      .then(() => {
        getAllUsers()
        resetModalForm(reset)
        setNotification("Usuario creado exitosamente");
        setShowNotification(true);
      })
      .catch((err) => console.log(err))
  }


  const deleteUser = (id) => {
    const url = BASE_URL + `/users/${id}/`

    axios
      .delete(url)
      .then(() => {
        getAllUsers()
        setNotification("Usuario eliminado exitosamente")
        setShowNotification(true)
      })
      .catch((err) => console.log(err))
  }

  const updateUser = (data, reset) => {
    const url = BASE_URL + `/users/${isUserUpdate.id}/`

    axios
      .patch(url, data)
      .then(() => {
        getAllUsers();
        resetModalForm(reset);
        setNotification("Usuario actualizado exitosamente");
        setShowNotification(true);
      })
      .catch((err) => console.log(err));
  }

  const resetModalForm = (reset) => {
    setIsShowModal(false)
    reset(DEFAULT_VALUES)
    setIsUserUpdate(null)
  }

  const handleCloseModal = () => {
    setShowNotification(false);
  };


  useEffect(() => {
    getAllUsers()
  }, [])

  



  return (
    <>
      <main className="bg-dark min-h-screen text-white font-['Roboto']">

        <Header chageShowModel={chageShowModel} />

        <ModalForm isShowModal={isShowModal}
          createUser={createUser}
          isUserUpdate={isUserUpdate}
          updateUser={updateUser}
          resetModalForm={resetModalForm}
          handleCloseModal={handleCloseModal}
        />

        <NotificationModal
          showNotification={showNotification}
          notification={notification}
          handleCloseModal={handleCloseModal}
        />


        <UserList
          users={users}
          deleteUser={deleteUser}
          chageShowModel={chageShowModel}
          setIsUserUpdate={setIsUserUpdate}
        />

      </main>
    </>
  )
}



export default App
