import React, { createContext, useState } from 'react'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

export  const sideBarContext=createContext();

const App = () => {

  const [sideBar,setSideBar]=useState(true);
  return (
    <div className='flex ' >
      <sideBarContext.Provider value={{sideBar,setSideBar}} >
      <Sidebar/>
      <MainContent/>
      </sideBarContext.Provider>

    </div>
  )
}

export default App
