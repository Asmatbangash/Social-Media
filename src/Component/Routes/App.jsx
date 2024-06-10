import Sidebar from '../Sidebar'
import Header from '../Header'
import Footer from '../Footer'
import './App.css'
import { useState } from 'react'
import ContextPostProvider from '../Store/ContextPost'
import { Outlet } from 'react-router-dom'

function App() {
  const [selectedTab, setSelectedTab] = useState('Home')
  
    return (
    <ContextPostProvider>
     <div className='main-container'>
     <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
     <div className="content">
     <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <Outlet />
     <Footer />
     </div>
     </div>
     </ContextPostProvider>
  )
  }
  


export default App
