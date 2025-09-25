import { useState } from 'react'
import './App.css'
import { Header, Navigation, ProfileSidebar, CVContent } from './components'

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="app">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="main-content">
        <ProfileSidebar />
        <CVContent activeTab={activeTab} />
      </main>
    </div>
  )
}

export default App
