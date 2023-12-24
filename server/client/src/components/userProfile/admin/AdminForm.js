import React from 'react'
import BasicTable from '../../table/BasicTable'
import api from '../../../utils/api'

function AdminForm({ profile, usersOnHold }) {

  const handleConfirm = async (toConfirm) => {
    try {
      toConfirm.forEach(element => {
        const { data } = api.put(`/freelancers/${element}`)
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <>
      <div>Waiting to confirtmed
        {usersOnHold && <BasicTable
          usersOnHold={usersOnHold}
          handleConfirm={handleConfirm}
        />}
      </div>
      <div>reports</div>
    </>
  )
}

export default AdminForm