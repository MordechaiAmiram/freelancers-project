import FreelanceForm from './FreelanceForm'
import './freelance.css'

function Freelance({ profile, handleLogOut, valueProps, isUpdate, handleSubmit, handleUpdate }) {

  return (
    <>
      <FreelanceForm
        profile={profile}
        handleLogOut={handleLogOut}
        isUpdate={isUpdate}
        handleUpdate={handleUpdate}
        handleSubmit={handleSubmit}
        valueProps={valueProps}
      />
    </>
  )
}

export default Freelance