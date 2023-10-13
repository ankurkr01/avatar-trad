import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Content from './Content'
import '../../style/adminDashboard.css'
const AdminDashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const [activeCategory, setActiveCategory] = useState('Categories');
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle}
         OpenSidebar={OpenSidebar}
        setActiveCategory={setActiveCategory}
        />
       <Content activeCategory={activeCategory} />
    </div>
  )
}
export default AdminDashboard
