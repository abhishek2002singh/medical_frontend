import React from 'react'
import { Outlet } from 'react-router-dom'

const DoctorHandler = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default DoctorHandler