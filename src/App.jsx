import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar.jsx';
import Middle from './components/Middle.jsx';
import Three from './components/Three.jsx';
import LeftSide from './components/Left.jsx';
import RightSide from './components/Right.jsx';
import Footer from './Footer.jsx';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='App'>
    <Navbar/>
    <div className='second' style={{top:0,position:'absolute'}}>
      <Middle/>
    </div>
    <div className='third' style={{top:0,position:'absolute'}}>
      <Three/>
    </div>
    <div>
      <LeftSide/>
      <RightSide/>
    </div>
    <Footer/>
  

    </div>
  )
}

export default App
