import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import BurgerMenu from './components/BurgerMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex box-border bg-[#1e1f20]'>
        <BurgerMenu/>
        <Sidebar/>
        <Main/>
    </div>
  )
}

export default App
