import React from 'react'
import BasicTable from '../../table/BasicTable'

function AdminForm({ profile, usersOnHold, handleConfirm }) {

  return (
    <>
      <div><b>Waiting to confirtmed</b>
        {usersOnHold?.length > 0 && 
        <BasicTable
          usersOnHold={usersOnHold}
          handleConfirm={handleConfirm}
        />}
      </div>
      <div>reports</div>
    </>
  )
}

export default AdminForm