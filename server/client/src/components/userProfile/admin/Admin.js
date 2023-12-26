import AdminForm from './AdminForm'

function Admin({ profile, handleLogOut }) {

  return (
    <>
      <AdminForm
        profile={profile}
        handleLogOut={handleLogOut}
      />
    </>
  )
}

export default Admin