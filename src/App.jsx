import { useEffect, useState } from "react";
import Header from "./components/Header";
import ModalForm from "./components/ModalForm";
import axios from "axios";
import UserList from "./components/UserList";

const BASE_URL = "https://users-crud.academlo.tech/"

const DEFAULT_VALUES = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
}

function App() {
  const [isUserUpdate, setIsUserUpdate] = useState(null)
  const [isShowModal, setIsShowModal] = useState(false);
  const [users, setUsers] = useState([])

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
      })
      .catch((err) => console.log(err))
  }


  const deleteUser = (id) => {
    const url = BASE_URL + `/users/${id}/`

    axios.delete(url)
      .then(() => getAllUsers())
      .catch((err) => console.log(err))
  }

  const updateUser = (data, reset) => {
    const url = BASE_URL + `/users/${isUserUpdate.id}/`

    axios.patch(url, data)
      .then(() => {
        getAllUsers()
        resetModalForm(reset)
      })
      .catch((err) => console.log(err))
  } 

  const resetModalForm = (reset) => {
    setIsShowModal(false)
    reset(DEFAULT_VALUES)
    setIsUserUpdate(null)
  }


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

// 1.37

export default App
