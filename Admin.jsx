import "./admin.css"
import AdminHeader from '../../components/admin/AdminHeader'
import Sidebar from '../../components/admin/Sidebar'
import AdminHome from '../../components/admin/AdminHome'
import { useState } from "react"

const Admin = () => {

  const [openSidebarToggle,setOpenSidebarToggle]=useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='gridContainer'>
      <AdminHeader OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <AdminHome/>
    </div>
  )
}

export default Admin