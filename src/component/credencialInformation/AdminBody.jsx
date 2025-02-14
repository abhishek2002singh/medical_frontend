import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminBody = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default AdminBody