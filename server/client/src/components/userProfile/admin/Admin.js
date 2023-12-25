import AdminForm from './AdminForm'
import useFetch from '../../../hooks/useFetch'

function Admin({ profile, handleLogOut }) {
  const [usersOnHold, setUsersOnHold] = useFetch('/freelancers/on-hold')
  const [sumOfFreelancers] = useFetch('/freelancers/sum')
  const [sumOfUsers] = useFetch('/users/sum')

  const handleUsersOnHold = (data) => {
    data.forEach((element, index) => {
      if (element.value.status === 201) {
        setUsersOnHold((prev) => {
          const newUsers = [...prev]
          newUsers.splice(index, 1)
          return newUsers
        })
      }
    })
  }

  return (
    <>
      <AdminForm
        profile={profile}
        usersOnHold={usersOnHold}
        handleUsersOnHold={handleUsersOnHold}
        sumOfFreelancers={sumOfFreelancers}
        sumOfUsers={sumOfUsers}
        handleLogOut={handleLogOut}
      />
    </>
  )
}

export default Admin