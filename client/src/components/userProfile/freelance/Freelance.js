import FreelanceForm from './FreelanceForm'
import './freelance.css'

function Freelance({ profile, valueProps, isUpdate, handleSubmit, handleUpdate }) {

  return (
    <>
      <FreelanceForm
        profile={profile}
        isUpdate={isUpdate}
        handleUpdate={handleUpdate}
        handleSubmit={handleSubmit}
        valueProps={valueProps}
      />
    </>
  )
}

export default Freelance