import React from 'react'
import Navbar from './Navbar'
import SideNav from './SideNav'

function Layouts({children}) {
  return (
      <>
      <Navbar />
      <SideNav />
          {children}
      </>
  )
}

export default Layouts