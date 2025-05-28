import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/home'
import RoomPage from './pages/room'
import AboutPage from './pages/About/AboutPage'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/room/:roomId' element={<RoomPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
     </Routes>
   </div>
  )
}

export default App
